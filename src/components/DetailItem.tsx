type DetailItemProps = {
  label: string;
  data: string;
};
export const DetailItem = ({ label, data }: DetailItemProps) => {
  return (
    <p className="font-bold mb-3 text-gray-500 uppercase">
      {label}: <span className="text-indigo-500 ">{data}</span>
    </p>
  );
};
