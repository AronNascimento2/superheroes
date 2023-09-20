interface BiographyProps {
  biography: {
    [key: string]: string;
  };
}
export const Biography: React.FC<BiographyProps> = (biography) => {
  return (
    <div className=" flex  flex-col gap-1 w-full">
      {Object.entries(biography.biography).map(([biography, value]) => (
        <div
          key={value}
          className="flex gap-1 w-full justify-between items-center border-b border-b-gray"
        >
          <span className="font-bold">{biography}:</span>

          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
