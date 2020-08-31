export const generateWalkData = (
  count: number
): { step: number; value: number }[] => {
  const data = [];
  for (let index = 0; index < count; index++) {
    data.push({ step: index, value: Math.random() * 10 });
  }

  return data;
};
