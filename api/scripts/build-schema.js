const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, '../prisma/schema');
const outputFile = path.join(__dirname, '../prisma/schema.prisma');

const files = fs.readdirSync(schemaDir).filter(file => file.endsWith('.prisma'));

let schema = `
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
`;

files.forEach(file => {
  const filePath = path.join(schemaDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  schema += `\n${fileContent}\n`;
});

fs.writeFileSync(outputFile, schema);
console.log('Schema built successfully.');