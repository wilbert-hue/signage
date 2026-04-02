'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  customerSize: string
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Proposition 2 fields
  keyBuyingCriteria: string
  keyPainPoints: string
  upcomingTriggers: string
  // Proposition 3 fields
  budgetOwnership: string
  procurementModel: string
  preferredEngagementType: string
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  customerBenchmarkingSummary: string
  additionalNotes: string
}

const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'Customer 1',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 2,
    customerName: 'Customer 2',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 3,
    customerName: 'Customer 3',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 4,
    customerName: 'Customer 4',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 5,
    customerName: 'Customer 5',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 6,
    customerName: 'Customer 6',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 7,
    customerName: 'Customer 7',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 8,
    customerName: 'Customer 8',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 9,
    customerName: 'Customer 9',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 10,
    customerName: 'Customer 10',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 11,
    customerName: 'Customer 11',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 12,
    customerName: 'Customer 12',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 13,
    customerName: 'Customer 13',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 14,
    customerName: 'Customer 14',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  },
  {
    sNo: 15,
    customerName: 'Customer N',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    customerSize: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    keyBuyingCriteria: 'xx',
    keyPainPoints: 'xx',
    upcomingTriggers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    preferredDeploymentModel: 'xx',
    performanceExpectations: 'xx',
    customerBenchmarkingSummary: 'xx',
    additionalNotes: 'xx'
  }
]

interface PropositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Proposition({ title, isOpen, onToggle, children }: PropositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  // Proposition 1 - Basic: Customer Information + Contact Details
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[60px]">S.No.</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Retail chain / DOOH advertising network / QSR operator / Airport authority / Healthcare provider / Corporate enterprise / Smart city operator / Education institution / Hospitality group / BFSI network / System integrator)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">Retail / Transportation / Hospitality & QSR / Healthcare / BFSI / Corporate / Education / Government & Smart Cities / Media & Entertainment</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">
              <div>Total Annual Revenue</div>
              <div className="font-normal text-[10px] text-gray-600">(US$ Million)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large enterprise (multi-location national/global) / Mid-size regional chain / Small single-location operator / Government authority)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerSize}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.websiteUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 - Advance: Customer Information + Contact Details + Professional Drivers
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#9370DB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[60px]">S.No.</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Customer Name/Company Name</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Retail chain / DOOH advertising network / QSR operator / Airport authority / Healthcare provider / Corporate enterprise / Smart city operator / Education institution / Hospitality group / BFSI network / System integrator)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">Retail / Transportation / Hospitality & QSR / Healthcare / BFSI / Corporate / Education / Government & Smart Cities / Media & Entertainment</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">
              <div>Total Annual Revenue</div>
              <div className="font-normal text-[10px] text-gray-600">(US$ Million)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large enterprise / Mid-size regional chain / Small single-location operator / Government authority)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(High display quality (4K/LED brightness) / Content flexibility & real-time updates / Centralized CMS control / Integration with POS/CRM/ERP systems / Scalability across multiple locations / Energy efficiency & durability / Vendor reliability & service support / Data analytics & audience measurement / Interactivity (touch, AI-driven personalization) / Compliance (ADA, safety standards))</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(High upfront hardware costs / Content management complexity across locations / Lack of real-time content personalization / Integration issues with legacy IT systems / Limited ROI visibility (ad performance tracking) / Maintenance & downtime challenges / Bandwidth/connectivity constraints / Fragmented vendor ecosystem / Security vulnerabilities (networked displays) / Difficulty scaling across geographies)</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(Expansion of retail outlets/franchises / Shift to omnichannel & in-store digital experiences / Adoption of programmatic DOOH advertising / Smart city & infrastructure digitization projects / AI-driven customer engagement initiatives / Cloud-based CMS migration / Self-service kiosk deployments / Digital menu board upgrades (QSR) / Corporate workplace digitalization / Data-driven marketing investments)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerSize}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.websiteUrl}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyBuyingCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 - Premium: All fields including Purchasing Behaviour, Solution Requirements, CMI Insights
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#9370DB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#FFB6C1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[60px]">S.No.</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Customer Name/Company Name</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Retail chain / DOOH advertising network / QSR operator / Airport authority / Healthcare provider / Corporate enterprise / Smart city operator / Education institution / Hospitality group / BFSI network / System integrator)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">Retail / Transportation / Hospitality & QSR / Healthcare / BFSI / Corporate / Education / Government & Smart Cities / Media & Entertainment</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">
              <div>Total Annual Revenue</div>
              <div className="font-normal text-[10px] text-gray-600">(US$ Million)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large enterprise / Mid-size regional chain / Small single-location operator / Government authority)</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
            {/* Professional Drivers */}
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(High display quality (4K/LED brightness) / Content flexibility & real-time updates / Centralized CMS control / Integration with POS/CRM/ERP systems / Scalability across multiple locations / Energy efficiency & durability / Vendor reliability & service support / Data analytics & audience measurement / Interactivity (touch, AI-driven personalization) / Compliance (ADA, safety standards))</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(High upfront hardware costs / Content management complexity across locations / Lack of real-time content personalization / Integration issues with legacy IT systems / Limited ROI visibility / Maintenance & downtime challenges / Bandwidth/connectivity constraints / Fragmented vendor ecosystem / Security vulnerabilities / Difficulty scaling across geographies)</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(Expansion of retail outlets / Shift to omnichannel & in-store digital experiences / Adoption of programmatic DOOH advertising / Smart city & infrastructure digitization / AI-driven customer engagement / Cloud-based CMS migration / Self-service kiosk deployments / Digital menu board upgrades / Corporate workplace digitalization / Data-driven marketing investments)</div>
            </th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(CIO/CTO (technology decisions) / CMO/Marketing Head (content & advertising) / Retail Operations Head / Facilities/Infrastructure Head / Procurement Department / Smart City/Government Program Office)</div>
            </th>
            <th className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Direct purchase from OEMs (Samsung, LG, etc.) / System integrator-led deployment / Managed service providers (MSPs) / DOOH media partnerships / SaaS subscription (CMS platforms) / Leasing/hardware-as-a-service / Government tenders / Franchise-level decentralized procurement)</div>
            </th>
            <th className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Pilot deployment (single store/location) / Proof of concept (interactive signage/AI) / Multi-location rollout contracts / Managed signage services / Content + hardware bundled solutions / Long-term AMC/service agreements / Upgrade & modernization projects / Advertising revenue-sharing models (DOOH))</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Digital displays (LED, LCD, OLED) / Video walls / Interactive kiosks & touchscreens / Digital menu boards / Media players)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(On-premise deployment (store-level systems) / Cloud-based CMS (dominant trend) / Hybrid (edge + cloud))</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Performance Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(High uptime ({'>'}99%) / Real-time content updates / Seamless multi-location synchronization / High-resolution display quality (4K/8K) / Low latency content delivery / Secure and encrypted systems / Easy scalability across locations / User-friendly CMS interface / Integration with analytics platforms / Fast installation & minimal downtime)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#FFB6C1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#FFB6C1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Additional Comments/Notes By CMI Team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerSize}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.websiteUrl}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyBuyingCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEngagementType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.performanceExpectations}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalNotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div>
      {title && (
        <div className="mb-4">
          <h2 className="text-xl font-bold text-black">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">U.S. Digital Signage Market - Customer Database</p>
          <p className="text-xs text-gray-500">Verified directory and insight on customers</p>
        </div>
      )}

      <Proposition
        title="Proposition 1 - Basic"
        isOpen={openProposition === 1}
        onToggle={() => toggleProposition(1)}
      >
        {renderProposition1Table()}
      </Proposition>

      <Proposition
        title="Proposition 2 - Advance"
        isOpen={openProposition === 2}
        onToggle={() => toggleProposition(2)}
      >
        {renderProposition2Table()}
      </Proposition>

      <Proposition
        title="Proposition 3 - Premium"
        isOpen={openProposition === 3}
        onToggle={() => toggleProposition(3)}
      >
        {renderProposition3Table()}
      </Proposition>
    </div>
  )
}
