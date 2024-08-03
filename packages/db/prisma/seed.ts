import prisma from "@repo/db/client";

async function main() {
  //Admins
  const seedData: any = [
    {
      firstName: "Light",
      lastName: "Yagami",
      emailId: "light@gmail.com",
      address: "GOD",
      phoneNumber: 1234567881,
      fees: 1000,
      password: "12345678",
      image:
        "https://res.cloudinary.com/ddkc5kdus/image/upload/v1722171093/admin-images/cixumixtmuo7fxtbexip.webp",
    },
    {
      firstName: "Patrick",
      lastName: "Bateman",
      emailId: "iam@gmail.com",
      address: "Earth",
      phoneNumber: 2234567881,
      fees: 2200,
      password: "12345678",
      image:
        "https://res.cloudinary.com/ddkc5kdus/image/upload/v1722321301/admin-images/odhawbzcra311fevngrm.webp",
    },
  ];

  let LightNumber = 0;
  let PatrickNumber = 0;

  for (let i = 0; i < 5; i++) {
    if (LightNumber === 0) {
      LightNumber = Number(seedData?.[0].phoneNumber);
    }
    LightNumber = LightNumber;
    LightNumber++;

    const Yagami = await prisma.admin.upsert({
      where: {
        phoneNumber: seedData?.[0].phoneNumber.toString(),
      },
      update: {},
      create: {
        firstName: seedData?.[0].firstName.toString(),
        lastName: seedData?.[0].lastName.toString(),
        emailId: seedData?.[0].emailId.toString(),
        address: seedData?.[0].address.toString(),
        phoneNumber: LightNumber.toString(),
        fees: Number(seedData?.[0].fees),
        password: seedData?.[0].password.toString(),
        image:
          "https://res.cloudinary.com/ddkc5kdus/image/upload/v1722171093/admin-images/cixumixtmuo7fxtbexip.webp",
      },
    });

    if (PatrickNumber === 0) {
      PatrickNumber = Number(seedData?.[1].phoneNumber);
    }
    PatrickNumber++;

    const Bateman = await prisma.admin.upsert({
      where: {
        phoneNumber: seedData?.[1].phoneNumber.toString(),
      },
      update: {},
      create: {
        firstName: seedData?.[1].firstName.toString(),
        lastName: seedData?.[1].lastName.toString(),
        emailId: seedData?.[1].emailId.toString(),
        address: seedData?.[1].address.toString(),
        phoneNumber: PatrickNumber.toString(),
        fees: Number(seedData?.[1].fees),
        password: seedData?.[1].password.toString(),
        image:
          "https://res.cloudinary.com/ddkc5kdus/image/upload/v1722321301/admin-images/odhawbzcra311fevngrm.webp",
      },
    });

    console.log(Yagami, Bateman);
  }

  // User

  const test01 = await prisma.user.upsert({
    where: {
      phoneNumber: "1234567891",
    },
    update: {},
    create: {
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
      firstName: "Test User",
      lastName: "02",
      phoneNumber: "1234567892",
      password: "12345678",
      verified: true,
    },
  });
  console.log({ test01, test02 });

  // const Light = await prisma.admin.upsert({
  //   where: { phoneNumber: "1234567881" },
  //   update: {},
  //   create: {
  //     id: 1,
  //     firstName: "Light",
  //     lastName: "Yagami",
  //     emailId: "light@gmail.com",
  //     address: "GOD",
  //     phoneNumber: "1234567881",
  //     fees: 1000,
  //     password: "12345678",
  //     image:
  //       "https://res.cloudinary.com/ddkc5kdus/image/upload/v1722171093/admin-images/cixumixtmuo7fxtbexip.webp",
  //   },
  // });
  // const Wolverine = await prisma.admin.upsert({
  //   where: { phoneNumber: "1234567882" },
  //   update: {},
  //   create: {
  //     id: 2,
  //     firstName: "X-men",
  //     lastName: "Wolverine",
  //     emailId: "wolverine10@gmail.com",
  //     address: "America",
  //     phoneNumber: "1234567882",
  //     fees: 1500,
  //     password: "12345678",
  //     image:
  //       "https://res.cloudinary.com/ddkc5kdus/image/upload/v1721986576/admin-images/fmcydxyfr3wdxrthv4m8.jpg",
  //   },
  // });

  // console.log(Light, Wolverine);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
