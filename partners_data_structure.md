# ZamIO Admin Partners - Data Structure Definition

Based on review of `zamio_admin copy` requirements and industry standards for PRO management.

## PartnerPRO Entity

Represents a Performing Rights Organization (PRO) partner.

```typescript
interface PartnerPRO {
  id: string;
  name: string;
  type: 'local' | 'international';
  reportingStandard: 'CWR' | 'DDEX' | 'CSV' | 'other';
  adminFee: number; // Percentage (e.g., 15.5 for 15.5%)
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    website?: string;
  };
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  joinDate: string; // ISO date string
  description?: string;

  // Type-specific fields
  localSpecific?: {
    registrationNumber?: string;
    regulatoryBody?: string;
    primaryTerritory?: string;
  };

  internationalSpecific?: {
    globalHeadquarters?: string;
    memberCount?: number;
    establishedYear?: number;
  };

  // Performance metrics
  metrics: {
    totalAgreements: number;
    activeAgreements: number;
    totalRoyaltyCollected: number;
    lastCollectionDate?: string;
    disputeCount: number;
  };
}
```

## ReciprocalAgreement Entity

Represents agreements between PROs for cross-border royalty collection.

```typescript
interface ReciprocalAgreement {
  id: string;
  partnerId: string; // Reference to PartnerPRO
  territory: string; // Specific territory (e.g., "United States", "Ghana")
  startDate: string; // ISO date string
  endDate?: string; // Optional for ongoing agreements
  status: 'active' | 'pending' | 'expired' | 'terminated';
  cadence: 'monthly' | 'quarterly' | 'annually' | 'custom';
  feeOverride?: number; // Override of standard admin fee for this agreement
  terms: string; // Description of agreement terms
  notes?: string;

  // Performance tracking
  performance: {
    totalCollections: number;
    lastCollectionAmount: number;
    lastCollectionDate?: string;
    disputes: number;
    complianceRate: number; // Percentage
  };
}
```

## Partner Types and Characteristics

### Local Partners (Ghanaian PROs)
- **Examples**: GHAMRO, other local collecting societies
- **Focus**: National territory management, local artist representation
- **Key Metrics**: Local collection efficiency, regulatory compliance
- **Data Fields**: Registration numbers, local regulatory compliance

### International Partners
- **Examples**: ASCAP, BMI, PRS for Music, SOCAN
- **Focus**: Global territory coverage, cross-border collections
- **Key Metrics**: International collection volumes, agreement performance
- **Data Fields**: Global headquarters, member statistics, reciprocal agreements

## Relationship Model

```
PartnerPRO (1) ──── (many) ──── ReciprocalAgreement
     │
     └─── (many) ──── Territory
     │
     └─── (1) ──── AdminFeePolicy
```

## Territory Management

```typescript
interface Territory {
  id: string;
  name: string; // e.g., "United States", "European Union", "Ghana"
  code: string; // ISO country/region code
  partnerIds: string[]; // Partners covering this territory
  agreementIds: string[]; // Agreements for this territory
  status: 'active' | 'pending' | 'disputed';
  notes?: string;
}
```

## Data Flow for Royalty Collection

1. **Partner Registration**: Add/update PartnerPRO with type-specific info
2. **Agreement Creation**: Establish ReciprocalAgreement for specific territories
3. **Territory Assignment**: Map partners to territories they represent
4. **Performance Tracking**: Monitor collections, disputes, and compliance
5. **Royalty Processing**: Use agreements for cross-border collections

## Mock Data Strategy

- **Local Partners**: 3-5 Ghanaian PROs with realistic local data
- **International Partners**: 5-8 global PROs with international scope
- **Agreements**: Multiple reciprocal agreements between local and international partners
- **Territories**: Cover major markets (US, EU, UK, Canada, Australia, etc.)

This structure ensures comprehensive management of partner relationships while supporting the complex requirements of international royalty collection.
