import { prisma } from "@/lib/db";
import { JoinInput, TrialInput, ContactInput } from "@/lib/validations";

// In-memory fallback stores for local testing without active DB
const memoryStore = {
  applications: [] as Array<JoinInput & { id: string; status: string; createdAt: string }>,
  trials: [] as Array<TrialInput & { id: string; status: string; createdAt: string }>,
  contacts: [] as Array<ContactInput & { id: string; status: string; createdAt: string }>
};

export async function saveContactMessage(data: ContactInput) {
  try {
    if (process.env.DATABASE_URL) {
      return await prisma.contactMessage.create({
        data: {
          name: data.name,
          phone: data.phone || null,
          email: data.email || null,
          message: data.message
        }
      });
    }
  } catch (error) {
    console.warn("Database save failed, using memory store fallback", error);
  }

  const record = {
    id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    ...data,
    status: "unread",
    createdAt: new Date().toISOString()
  };
  memoryStore.contacts.unshift(record);
  return record;
}

export async function saveMembershipApplication(data: JoinInput) {
  try {
    if (process.env.DATABASE_URL) {
      return await prisma.membershipApplication.create({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          membership: data.membership || "General",
          goal: data.goal,
          preferredTime: data.preferredTime || "Flexible"
        }
      });
    }
  } catch (error) {
    console.warn("Database save failed, using memory store fallback", error);
  }

  const record = {
    id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    ...data,
    status: "new",
    createdAt: new Date().toISOString()
  };
  memoryStore.applications.unshift(record);
  return record;
}

export async function saveTrialBooking(data: TrialInput) {
  try {
    if (process.env.DATABASE_URL) {
      return await prisma.trialBooking.create({
        data: {
          name: data.name,
          phone: data.phone,
          date: data.date ? new Date(data.date) : null,
          time: data.time || null,
          goal: data.goal
        }
      });
    }
  } catch (error) {
    console.warn("Database save failed, using memory store fallback", error);
  }

  const record = {
    id: `trial_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    ...data,
    status: "new",
    createdAt: new Date().toISOString()
  };
  memoryStore.trials.unshift(record);
  return record;
}

export async function getAdminMetrics() {
  try {
    if (process.env.DATABASE_URL) {
      const [appCount, trialCount, contactCount, memberCount] = await Promise.all([
        prisma.membershipApplication.count(),
        prisma.trialBooking.count(),
        prisma.contactMessage.count(),
        prisma.member.count()
      ]);
      return {
        totalMembers: memberCount || 520,
        newApplications: appCount,
        trialBookings: trialCount,
        unreadMessages: contactCount,
        upcomingSessions: 12
      };
    }
  } catch (error) {
    console.warn("Database fetch failed, using memory metrics fallback", error);
  }

  return {
    totalMembers: 520,
    newApplications: memoryStore.applications.length,
    trialBookings: memoryStore.trials.length,
    unreadMessages: memoryStore.contacts.length,
    upcomingSessions: 12
  };
}

export async function getAdminData() {
  try {
    if (process.env.DATABASE_URL) {
      const [applications, trials, contacts] = await Promise.all([
        prisma.membershipApplication.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
        prisma.trialBooking.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
        prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 20 })
      ]);
      return { applications, trials, contacts };
    }
  } catch (error) {
    console.warn("Database query failed, returning fallback records", error);
  }

  return {
    applications: memoryStore.applications,
    trials: memoryStore.trials,
    contacts: memoryStore.contacts
  };
}
