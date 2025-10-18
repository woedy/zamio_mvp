# ZamIO Partners - Mock Data

## Local Partners (Ghanaian PROs)

```typescript
const localPartners = [
  {
    id: 'local-1',
    name: 'GHAMRO',
    type: 'local',
    reportingStandard: 'CWR',
    adminFee: 15.0,
    contactInfo: {
      email: 'info@ghamro.org',
      phone: '+233 30 297 6156',
      address: 'Accra, Ghana',
      website: 'https://ghamro.org'
    },
    status: 'active',
    joinDate: '2020-01-15',
    description: 'Ghana Music Rights Organization - Primary PRO for Ghanaian musicians',
    localSpecific: {
      registrationNumber: 'GH-PRO-001',
      regulatoryBody: 'Ministry of Tourism, Arts and Culture',
      primaryTerritory: 'Ghana'
    },
    metrics: {
      totalAgreements: 12,
      activeAgreements: 10,
      totalRoyaltyCollected: 2847293.45,
      lastCollectionDate: '2023-12-15',
      disputeCount: 3
    }
  },
  {
    id: 'local-2',
    name: 'Musiga Rights',
    type: 'local',
    reportingStandard: 'CSV',
    adminFee: 12.5,
    contactInfo: {
      email: 'rights@musiga.org',
      phone: '+233 24 123 4567',
      address: 'Accra, Ghana'
    },
    status: 'active',
    joinDate: '2021-03-20',
    description: 'Musicians Union of Ghana rights management division',
    localSpecific: {
      registrationNumber: 'GH-PRO-002',
      regulatoryBody: 'Musicians Union of Ghana'
    },
    metrics: {
      totalAgreements: 8,
      activeAgreements: 7,
      totalRoyaltyCollected: 1256789.23,
      lastCollectionDate: '2023-12-10',
      disputeCount: 1
    }
  }
];
```

## International Partners

```typescript
const internationalPartners = [
  {
    id: 'intl-1',
    name: 'ASCAP',
    type: 'international',
    reportingStandard: 'CWR',
    adminFee: 11.5,
    contactInfo: {
      email: 'licensing@ascap.com',
      phone: '+1 212 621 6000',
      address: 'New York, NY, USA',
      website: 'https://www.ascap.com'
    },
    status: 'active',
    joinDate: '2019-06-01',
    description: 'American Society of Composers, Authors and Publishers',
    internationalSpecific: {
      globalHeadquarters: 'New York, USA',
      memberCount: 850000,
      establishedYear: 1914
    },
    metrics: {
      totalAgreements: 45,
      activeAgreements: 42,
      totalRoyaltyCollected: 15428739.67,
      lastCollectionDate: '2023-12-20',
      disputeCount: 8
    }
  },
  {
    id: 'intl-2',
    name: 'BMI',
    type: 'international',
    reportingStandard: 'DDEX',
    adminFee: 12.0,
    contactInfo: {
      email: 'info@bmi.com',
      phone: '+1 212 586 2000',
      address: 'New York, NY, USA',
      website: 'https://www.bmi.com'
    },
    status: 'active',
    joinDate: '2019-08-15',
    description: 'Broadcast Music, Inc.',
    internationalSpecific: {
      globalHeadquarters: 'New York, USA',
      memberCount: 1200000,
      establishedYear: 1939
    },
    metrics: {
      totalAgreements: 38,
      activeAgreements: 35,
      totalRoyaltyCollected: 12837492.18,
      lastCollectionDate: '2023-12-18',
      disputeCount: 5
    }
  },
  {
    id: 'intl-3',
    name: 'PRS for Music',
    type: 'international',
    reportingStandard: 'CWR',
    adminFee: 10.5,
    contactInfo: {
      email: 'members@prsformusic.com',
      phone: '+44 20 7580 5544',
      address: 'London, UK',
      website: 'https://www.prsformusic.com'
    },
    status: 'active',
    joinDate: '2020-02-10',
    description: 'Performing Right Society for Music (UK)',
    internationalSpecific: {
      globalHeadquarters: 'London, UK',
      memberCount: 165000,
      establishedYear: 1914
    },
    metrics: {
      totalAgreements: 28,
      activeAgreements: 26,
      totalRoyaltyCollected: 8937456.92,
      lastCollectionDate: '2023-12-22',
      disputeCount: 4
    }
  }
];
```

## Reciprocal Agreements

```typescript
const reciprocalAgreements = [
  {
    id: 'agreement-1',
    partnerId: 'local-1', // GHAMRO
    territory: 'United States',
    startDate: '2020-01-15',
    status: 'active',
    cadence: 'quarterly',
    feeOverride: 11.5, // Override of GHAMRO's 15% fee for this territory
    terms: 'Reciprocal agreement for US territory representation',
    performance: {
      totalCollections: 450000.00,
      lastCollectionAmount: 125000.00,
      lastCollectionDate: '2023-12-15',
      disputes: 2,
      complianceRate: 94.5
    }
  },
  {
    id: 'agreement-2',
    partnerId: 'intl-1', // ASCAP
    territory: 'Ghana',
    startDate: '2019-06-01',
    status: 'active',
    cadence: 'monthly',
    terms: 'ASCAP represents ZamIO repertoire in Ghana',
    performance: {
      totalCollections: 890000.00,
      lastCollectionAmount: 95000.00,
      lastCollectionDate: '2023-12-20',
      disputes: 1,
      complianceRate: 97.2
    }
  }
];
```

## Territories

```typescript
const territories = [
  {
    id: 'territory-1',
    name: 'United States',
    code: 'US',
    partnerIds: ['intl-1', 'intl-2'], // ASCAP, BMI
    agreementIds: ['agreement-1'],
    status: 'active'
  },
  {
    id: 'territory-2',
    name: 'United Kingdom',
    code: 'GB',
    partnerIds: ['intl-3'], // PRS for Music
    agreementIds: [],
    status: 'active'
  },
  {
    id: 'territory-3',
    name: 'Ghana',
    code: 'GH',
    partnerIds: ['local-1'], // GHAMRO
    agreementIds: ['agreement-2'],
    status: 'active'
  }
];
```

## Usage Notes

- **Realism**: Data reflects realistic PRO relationships and collection amounts
- **Ghanaian Context**: Local partners focus on Ghanaian market specifics
- **International Scale**: Global partners have larger member counts and collection volumes
- **Agreement Focus**: Emphasizes cross-border reciprocal arrangements
- **Extensibility**: Structure supports easy addition of new partners and agreements

This mock data provides a solid foundation for building the Partners UI and can be easily extended as the system grows.
