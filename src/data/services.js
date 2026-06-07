export const services = [
  {
    id: 1,
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: 'scale',
    shortDescription: 'QA consult has a team with expertise across the industry. We provide services for startups...',
    description: `QA consult has a team with expertise across the manufacturing industry. We provide services for startups, small and medium enterprises, and large corporations looking to optimize their production processes and achieve quality excellence.

Our manufacturing consultancy covers:
- Process optimization and lean manufacturing
- Quality Management Systems (QMS) implementation
- ISO 9001:2015 certification guidance
- Production efficiency audits
- Supplier quality management
- Statistical process control`,
    features: [
      'Process Excellence',
      'ISO Certification Support',
      'Quality Audits',
      'Production Optimization',
      'Supplier Management',
      'Lean Manufacturing'
    ],
    image: '/images/services/manufacturing.jpg'
  },
  {
    id: 2,
    slug: 'hospitality',
    title: 'Hospitality',
    icon: 'family',
    shortDescription: 'We also provide audit services for organizations who have intentions of going for ISO 9001:2015...',
    description: `Our hospitality consultancy services help hotels, restaurants, and catering establishments achieve and maintain the highest standards of quality and food safety.

We provide:
- Food safety management systems
- HACCP implementation and certification
- Hygiene audits and training
- Customer service excellence programs
- Quality assurance for hospitality operations
- Regulatory compliance guidance`,
    features: [
      'Food Safety Management',
      'HACCP Certification',
      'Hygiene Audits',
      'Customer Service Training',
      'Quality Assurance',
      'Compliance Support'
    ],
    image: '/images/services/hospitality.jpg'
  },
  {
    id: 3,
    slug: 'qms',
    title: 'Quality Management Systems',
    icon: 'shield',
    shortDescription: 'Comprehensive QMS implementation and certification support for ISO 9001:2015.',
    description: `Our Quality Management System consultancy helps organizations implement robust QMS frameworks aligned with ISO 9001:2015 standards.

Services include:
- Gap analysis and assessment
- QMS documentation development
- Process mapping and optimization
- Internal audit training
- Management review facilitation
- Certification audit preparation`,
    features: [
      'ISO 9001:2015 Implementation',
      'Gap Analysis',
      'Documentation Support',
      'Internal Auditor Training',
      'Certification Preparation',
      'Continuous Improvement'
    ],
    image: '/images/QMS_ISO.jpg'
  },
  {
    id: 4,
    slug: 'ems',
    title: 'Environmental Management Systems',
    icon: 'leaf',
    shortDescription: 'ISO 14001:2015 implementation for sustainable environmental practices.',
    description: `Our Environmental Management System consultancy helps organizations minimize their environmental impact while achieving ISO 14001:2015 certification.

We assist with:
- Environmental aspect identification
- Legal compliance assessment
- EMS documentation and procedures
- Environmental performance monitoring
- Waste management optimization
- Sustainability initiatives`,
    features: [
      'ISO 14001:2015 Implementation',
      'Environmental Audits',
      'Compliance Assessment',
      'Sustainability Planning',
      'Waste Management',
      'Performance Monitoring'
    ],
    image: '/images/EMS.jpg'
  },
  {
    id: 5,
    slug: 'ohs',
    title: 'Occupational Health & Safety',
    icon: 'hard-hat',
    shortDescription: 'ISO 45001:2018 implementation for workplace safety excellence.',
    description: `Our Occupational Health and Safety consultancy helps organizations create safer workplaces through ISO 45001:2018 implementation.

Services include:
- Hazard identification and risk assessment
- Safety management system development
- Workplace safety audits
- Safety training programs
- Incident investigation procedures
- Emergency preparedness planning`,
    features: [
      'ISO 45001:2018 Implementation',
      'Risk Assessment',
      'Safety Audits',
      'Training Programs',
      'Incident Investigation',
      'Emergency Planning'
    ],
    image: '/images/services/ohs.jpg'
  },
  {
    id: 6,
    slug: 'fms',
    title: 'Food Safety Management',
    icon: 'utensils',
    shortDescription: 'FSSC 22000 and ISO 22000 implementation for food safety excellence.',
    description: `Our Food Safety Management consultancy helps food manufacturers and processors achieve the highest standards of food safety through FSSC 22000 and ISO 22000 implementation.

We provide:
- HACCP plan development
- Food safety management system implementation
- Prerequisite programs establishment
- Food defense and fraud prevention
- Traceability system development
- Certification audit preparation`,
    features: [
      'FSSC 22000 Implementation',
      'ISO 22000 Certification',
      'HACCP Development',
      'Food Defense Planning',
      'Traceability Systems',
      'Audit Preparation'
    ],
    image: '/images/services/fms.jpg'
  },
  {
    id: 7,
    slug: 'regulatory-affairs',
    title: 'Regulatory Affairs',
    icon: 'auction',
    shortDescription: 'QA Consult has competent personnel who have several years of regulatory experience...',
    description: `QA Consult has competent personnel who have several years of regulatory experience spanning across food, cosmetics, pharmaceuticals, and other consumer products.

Our regulatory services include:
- Product registration and licensing
- FDA Ghana liaison services
- GSA standards compliance
- Import/export documentation
- Labeling compliance review
- Regulatory strategy development`,
    features: [
      'Product Registration',
      'FDA Liaison Services',
      'Standards Compliance',
      'Import/Export Support',
      'Labeling Review',
      'Regulatory Strategy'
    ],
    image: '/images/services/regulatory.jpg'
  },
  {
    id: 8,
    slug: 'training',
    title: 'Training',
    icon: 'factory',
    shortDescription: 'With a skilled production workforce in short supply, manufacturing industries are stepping up...',
    description: `With a skilled production workforce in short supply, manufacturing industries and service organizations are stepping up their training efforts. QA Consult provides comprehensive training programs tailored to your organization's needs.

Training programs include:
- ISO Standards Implementation
- Internal Auditor Training
- HACCP and Food Safety
- Good Manufacturing Practices
- Quality Management Principles
- Leadership and Management`,
    features: [
      'ISO Standards Training',
      'Auditor Certification',
      'HACCP Training',
      'GMP Workshops',
      'Quality Principles',
      'Custom Programs'
    ],
    image: '/images/services/training.jpg'
  }
]

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug)
}
