// comparisonData.ts
export interface ProductFeature {
  minDeposit?: string;
  monthlyFee?: string;
  interestRate?: string;
  currency?: string;
  digitalAccess?: string;
}

export interface Product {
  id: string;
  name: string;
  features: ProductFeature;
}

export const products: Product[] = [
  {
    id: "savings",
    name: "Savings Account",
    features: {
      minDeposit: "Rp100,000",
      monthlyFee: "Rp12,500",
      interestRate: "0.50%",
      currency: "Rupiah",
      digitalAccess: "Yes",
    },
  },
  {
    id: "credit",
    name: "Credit Card",
    features: {
      monthlyFee: "Rp10k–12.5k",
      interestRate: "2.25%",
      currency: "Rupiah",
      digitalAccess: "Yes",
    },
  },
  {
    id: "debit",
    name: "Debit Card",
    features: {
      monthlyFee: "Rp3.5k–8.5k",
      digitalAccess: "Yes",
      currency: "Rupiah",
    },
  },
  {
    id: "foreign",
    name: "Foreign Currency Account",
    features: {
      minDeposit: "USD100",
      monthlyFee: "USD2",
      interestRate: "0.25%",
      currency: "USD & others",
      digitalAccess: "Yes",
    },
  },
  {
    id: "transfer",
    name: "Money Transfer",
    features: {
      monthlyFee: "Rp2.5k–30k",
      digitalAccess: "Yes",
      currency: "Rupiah",
    },
  },
  {
    id: "investment",
    name: "Investment Service",
    features: {
      interestRate: "Market dependent",
      digitalAccess: "Yes",
    },
  },
  {
    id: "loan",
    name: "Loan Service",
    features: {
      interestRate: "Variable",
      currency: "Rupiah",
      digitalAccess: "Yes",
    },
  },
  {
    id: "branch",
    name: "Smart Branch",
    features: {
      digitalAccess: "Yes",
      currency: "Rupiah",
    },
  },
];
