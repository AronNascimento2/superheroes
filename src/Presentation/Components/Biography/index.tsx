interface BiographyProps {
  biography: {
    [key: string]: string;
  };
}
export const Biography: React.FC<BiographyProps> = (biography) => {
  return (
    <div className=" flex flex-col gap-1 ">
      {Object.entries(biography.biography).map(([value]) => (
        <span key={value}>{value}</span>
      ))}
    </div>
  );
};
