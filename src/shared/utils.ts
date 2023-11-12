export const convertToIsoDate = (dateString: string): string => {
  const date = new Date(dateString);
  const isoDate = date.toISOString().split('T')[0];
  return `${isoDate}T00:00:00.000Z`;
};
