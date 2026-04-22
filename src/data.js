export const hyderabadLocations = [
  'Uppal',
  'Habsiguda',
  'Tarnaka',
  'Madhapur',
  'Gachibowli',
  'Secunderabad',
]

export const requestsData = [
  { id: 'REQ-201', typeKey: 'reqTypeFood', location: 'Uppal', priority: 'High', assignedVolunteer: 'Sneha Reddy', status: 'Escalated' },
  { id: 'REQ-202', typeKey: 'reqTypeMedical', location: 'Secunderabad', priority: 'High', assignedVolunteer: 'Ravi Kumar', status: 'Assigned' },
  { id: 'REQ-203', typeKey: 'reqTypeWater', location: 'Habsiguda', priority: 'Medium', assignedVolunteer: 'Harish V', status: 'Assigned' },
  { id: 'REQ-204', typeKey: 'reqTypeShelter', location: 'Madhapur', priority: 'Medium', assignedVolunteerKey: 'unassigned', status: 'Escalated' },
  { id: 'REQ-205', typeKey: 'reqTypeTransport', location: 'Gachibowli', priority: 'Low', assignedVolunteer: 'Deepa N', status: 'Assigned' },
]

export const volunteersData = [
  { name: 'Ravi Kumar', skillsKey: 'skillMedicalAid', location: 'Secunderabad', trust: 4.8, availabilityKey: 'availDay' },
  { name: 'Sneha Reddy', skillsKey: 'skillFoodLogistics', location: 'Uppal', trust: 4.6, availabilityKey: 'availNight' },
  { name: 'Ahmed Khan', skillsKey: 'skillRescueSupport', location: 'Tarnaka', trust: 4.7, availabilityKey: 'availFullDay' },
  { name: 'Deepa N', skillsKey: 'skillSupplyChain', location: 'Gachibowli', trust: 4.5, availabilityKey: 'availEvening' },
]

export const riskZones = [
  { zone: 'Tarnaka', risk: 88 },
  { zone: 'Uppal', risk: 81 },
  { zone: 'Madhapur', risk: 70 },
]

export const predictions = []

