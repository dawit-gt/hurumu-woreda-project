/**
 * Hurumu Woreda Administration Portal — Database Seed
 * Run: npx ts-node prisma/seed.ts
 */
import * as bcrypt from 'bcryptjs';

async function main() {
  let prisma: any;
  try {
    const { PrismaClient } = require('@prisma/client');
    prisma = new PrismaClient();
  } catch {
    console.error('❌  @prisma/client not found. Run: npx prisma generate');
    process.exit(1);
  }

  console.log('🌱 Seeding Hurumu Woreda database...\n');

  // ── Departments ───────────────────────────────────────────────
  const deptData = [
    { name: 'Agriculture & Natural Resources', nameOromoo: 'Qonnaa fi Qabeenya Uumamaa', slug: 'agriculture', iconName: 'farm', headName: 'Ato Gemechu Tadesse', phone: '+251577001001', email: 'agriculture@hurumu.pro.et', sortOrder: 1 },
    { name: 'Health & Social Affairs',         nameOromoo: 'Fayyaa fi Dhimma Hawaasaa',  slug: 'health',       iconName: 'health',    headName: 'Dr. Fatuma Ali',        phone: '+251577001002', email: 'health@hurumu.pro.et',       sortOrder: 2 },
    { name: 'Education',                       nameOromoo: 'Barnoota',                    slug: 'education',    iconName: 'education', headName: 'Ato Berhanu Girma',     phone: '+251577001003', email: 'education@hurumu.pro.et',     sortOrder: 3 },
    { name: 'Finance & Economy',               nameOromoo: 'Maallaqaa fi Dinagdee',       slug: 'finance',      iconName: 'business',  headName: 'Ato Tadesse Wolde',     phone: '+251577001004', email: 'finance@hurumu.pro.et',       sortOrder: 4 },
    { name: 'Infrastructure & Construction',   nameOromoo: 'Insfiraastirakcharii',        slug: 'infrastructure',iconName: 'map',      headName: 'Engr. Mohammed Hussien',phone: '+251577001005', email: 'infrastructure@hurumu.pro.et', sortOrder: 5 },
    { name: 'Land Administration',             nameOromoo: 'Bulchiinsa Lafaa',            slug: 'land',         iconName: 'doc',       headName: 'Ato Lemma Fikadu',      phone: '+251577001006', email: 'land@hurumu.pro.et',          sortOrder: 6 },
  ];

  const depts: any[] = [];
  for (const d of deptData) {
    const dept = await prisma.department.upsert({ where: { slug: d.slug }, update: {}, create: d });
    depts.push(dept);
  }
  console.log(`✅  ${depts.length} departments`);

  // ── Kebeles ────────────────────────────────────────────────────
  const kebeleData = [
    { name: 'Hurumu Town', number: 1, population: 12000 },
    { name: 'Alge',        number: 2, population: 6800  },
    { name: 'Boneya',      number: 3, population: 7200  },
    { name: 'Chewaka',     number: 4, population: 5500  },
    { name: 'Didu',        number: 5, population: 6100  },
    { name: 'Geba',        number: 6, population: 4900  },
    { name: 'Haroo',       number: 7, population: 7800  },
    { name: 'Ilu',         number: 8, population: 5300  },
    { name: 'Karro',       number: 9, population: 6700  },
    { name: 'Mana',        number: 10, population: 4200 },
  ];
  for (const k of kebeleData) {
    await prisma.kebele.upsert({ where: { number: k.number }, update: {}, create: k });
  }
  console.log(`✅  ${kebeleData.length} kebeles`);

  // ── Super Admin ────────────────────────────────────────────────
  const passwordHash = await bcrypt.hash('Admin@Hurumu2026!', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'superadmin@hurumu.pro.et' },
    update: {},
    create: {
      email: 'superadmin@hurumu.pro.et',
      fullName: 'Hurumu Portal Admin',
      passwordHash,
      role: 'SUPER_ADMIN',
      isActive: true,
    },
  });
  console.log(`✅  Admin user: ${admin.email}`);

  // ── Services ───────────────────────────────────────────────────
  const [agriDept, , , , , landDept] = depts;
  const servicesData = [
    {
      name: 'Birth Certificate', nameOromoo: 'Ragaa Dhalootaa',
      slug: 'birth-certificate',
      description: 'Register a new birth and obtain an official birth certificate',
      category: 'CIVIL_REGISTRATION', iconName: 'id', fee: 0, processingDays: 3,
      requiredDocs: ['Parent ID cards', 'Hospital delivery record', 'Two witnesses'],
      steps: ['Visit Civil Registration Office', 'Submit required documents', 'Collect certificate in 3 working days'],
      isOnline: false,
    },
    {
      name: 'Land Use Certificate', nameOromoo: 'Ragaa Fayyadama Lafaa',
      slug: 'land-certificate',
      description: 'Obtain official certification for rural or urban land use rights',
      category: 'LAND_ADMINISTRATION', iconName: 'doc', fee: 150, processingDays: 14,
      requiredDocs: ['Valid ID', 'Previous land documents', 'Neighbor confirmation letters'],
      steps: ['Submit application', 'Site inspection', 'Public notice (7 days)', 'Certificate issuance'],
      isOnline: false, departmentId: landDept.id,
    },
    {
      name: 'Business License', nameOromoo: 'Hayyama Daldalaa',
      slug: 'business-license',
      description: 'Register a new business or renew your existing trade license',
      category: 'BUSINESS_LICENSE', iconName: 'business', fee: 300, processingDays: 7,
      requiredDocs: ['Valid ID', 'Business description', 'Lease agreement', 'TIN'],
      steps: ['Complete form', 'Submit documents and fee', 'Inspection', 'License issuance'],
      isOnline: false,
    },
    {
      name: 'Agricultural Extension', nameOromoo: "Tajaajila Babal'insa Qonnaa",
      slug: 'agricultural-extension',
      description: 'Access expert agricultural advice, improved seeds, and input subsidies',
      category: 'AGRICULTURE', iconName: 'farm', fee: 0, processingDays: 1,
      requiredDocs: ['Farmer ID', 'Land certificate'],
      steps: ['Register at kebele', 'Farm visit and assessment', 'Input/advice provision'],
      isOnline: false, departmentId: agriDept.id,
    },
  ];

  for (const s of servicesData) {
    await prisma.service.upsert({ where: { slug: s.slug }, update: {}, create: s });
  }
  console.log('✅  Services');

  // ── News ───────────────────────────────────────────────────────
  const newsData = [
    {
      title: '2025/26 Agricultural Season Support Program Now Open',
      titleOromoo: 'Sagantaa Deeggarsa Ganna 2025/26 Banameera',
      slug: 'agricultural-season-2025',
      excerpt: 'The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution for all kebele farmers.',
      content: '<p>The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution for all kebele farmers across all 18 kebeles of Hurumu Woreda.</p><p>Farmers are encouraged to register early at their local kebele administration office with a valid Farmer ID card and land certificate copy.</p>',
      tag: 'ANNOUNCEMENT', status: 'PUBLISHED', isUrgent: true,
      publishedAt: new Date('2026-07-10'), authorId: admin.id, departmentId: agriDept.id,
    },
    {
      title: 'Hurumu Woreda 3rd Quarter Performance Review Meeting',
      slug: 'q3-performance-review',
      excerpt: 'All department heads and kebele administration leaders are invited to the quarterly review session at the Woreda Hall.',
      content: '<p>All department heads and kebele administration leaders are invited to the 3rd quarter performance review session scheduled at the Hurumu Woreda Hall.</p>',
      tag: 'EVENT', status: 'PUBLISHED', isUrgent: false,
      publishedAt: new Date('2026-07-08'), authorId: admin.id,
    },
    {
      title: 'Civil Registration Office Extended Hours – July 2026',
      slug: 'civil-reg-extended-july-2026',
      excerpt: 'Extended service hours every weekday from 8 AM to 5 PM to address backlog in birth and marriage certificate requests.',
      content: '<p>The Civil Registration Office will be operating extended hours every weekday from 8:00 AM to 5:00 PM throughout July 2026.</p>',
      tag: 'NOTICE', status: 'PUBLISHED', isUrgent: false,
      publishedAt: new Date('2026-07-05'), authorId: admin.id,
    },
    {
      title: 'Hurumu-Metu Road Rehabilitation Work Begins',
      slug: 'road-rehab-metu-2026',
      excerpt: 'The Infrastructure Office has commenced road rehabilitation on the 42 km stretch connecting Hurumu to Metu town.',
      content: '<p>Road rehabilitation work on the 42 km Hurumu–Metu stretch has officially commenced in partnership with regional contractors.</p>',
      tag: 'PROJECT', status: 'PUBLISHED', isUrgent: false,
      publishedAt: new Date('2026-06-28'), authorId: admin.id,
    },
  ];

  for (const n of newsData) {
    await prisma.news.upsert({ where: { slug: n.slug }, update: {}, create: n });
  }
  console.log('✅  News');

  // ── Site Config ────────────────────────────────────────────────
  const configs = [
    { key: 'site.name',       value: 'Hurumu Woreda Administration Portal' },
    { key: 'site.phone',      value: '+251 57 XXX XXXX' },
    { key: 'site.email',      value: 'info@hurumu.pro.et' },
    { key: 'site.address',    value: 'Hurumu Town, Ilu Aba Bora Zone, Oromia, Ethiopia' },
    { key: 'site.population', value: '124000' },
    { key: 'site.kebeles',    value: '18' },
    { key: 'site.area',       value: '847' },
  ];
  for (const c of configs) {
    await prisma.siteConfig.upsert({ where: { key: c.key }, update: { value: c.value }, create: c });
  }
  console.log('✅  Site config');

  await prisma.$disconnect();

  console.log('\n🎉  Seed complete!');
  console.log('──────────────────────────────');
  console.log('   Email: superadmin@hurumu.pro.et');
  console.log('   Pass:  Admin@Hurumu2026!');
  console.log('──────────────────────────────\n');
}

main().catch(e => { console.error(e); process.exit(1); });
