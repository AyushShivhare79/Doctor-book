import prisma from "@repo/db/client";

async function main() {
  const test01 = await prisma.user.upsert({
    where: {
      phoneNumber: "1234567891",
    },
    update: {},
    create: {
      id: 1,
      firstName: "Test User",
      lastName: "01",
      phoneNumber: "1234567891",
      password: "12345678",
      verified: true,
    },
  });

  const test02 = await prisma.user.upsert({
    where: {
      phoneNumber: "1234567892",
    },
    update: {},
    create: {
      id: 2,
      firstName: "Test User",
      lastName: "02",
      phoneNumber: "1234567892",
      password: "12345678",
      verified: true,
    },
  });
  console.log({ test01, test02 });

  const Light = await prisma.admin.upsert({
    where: { phoneNumber: "1234567881" },
    update: {},
    create: {
      id: 1,
      firstName: "Light",
      lastName: "Yagami",
      emailId: "light@gmail.com",
      address: "GOD",
      phoneNumber: "1234567881",
      fees: 1000,
      password: "12345678",
      image:
        "https://res.cloudinary.com/ddkc5kdus/image/upload/v1722171093/admin-images/cixumixtmuo7fxtbexip.webp",
    },
  });
  const Wolverine = await prisma.admin.upsert({
    where: { phoneNumber: "1234567882" },
    update: {},
    create: {
      id: 2,
      firstName: "X-men",
      lastName: "Wolverine",
      emailId: "wolverine10@gmail.com",
      address: "America",
      phoneNumber: "1234567882",
      fees: 1500,
      password: "12345678",
      image:
        "https://res.cloudinary.com/ddkc5kdus/image/upload/v1721986576/admin-images/fmcydxyfr3wdxrthv4m8.jpg",
    },
  });

  console.log(Light, Wolverine);
}

// export async function seedAdmin() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// async function seedDatabase() {
//   try {
//     await seedUsers();
//     await seedAdmin();
//   } catch (error) {
//     console.error("error seeding database: ", error);
//     throw error;
//   } finally {
//     await prisma.$disconnect();
//   }
// }
