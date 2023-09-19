interface BiographyProps {
  appearance: {
    [key: string]: string;
  };
}
export const Appearance: React.FC<BiographyProps> = (appearance) => {
  return (
    <div className=" flex flex-col gap-1 w-full">
      {Object.entries(appearance.appearance).map(([appearance, value]) => (
        <div
          key={value}
          className="flex gap-1 w-full justify-between items-center border-b border-b-gray"
        >
          <span className="font-bold">{appearance}:</span>

          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
