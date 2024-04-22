import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient(); 

async function main() {
  // create two dummy category
  const cat1 = await prisma.category.create({
    data: {
      nombre: 'Electronica',
      descripcion: 'Categoria que involucra articulos electronicos',
      activa: true,
    },
  });

  const cat2 = await prisma.category.create({
    data: {
      nombre: 'Hogar',
      descripcion: 'Categoria que involucra articulos del hogar',
      activa: true,
    },
  });

  const cat3 = await prisma.category.create({
    data: {
      nombre: 'Autos',
      descripcion: 'Categoria que involucra autos',
      activa: true,
    },
  });
  console.log({ cat1, cat2, cat3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
