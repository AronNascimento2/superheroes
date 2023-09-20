interface BiographyProps {
  connections: {
    [key: string]: string;
  };
}
export const HeroConnections: React.FC<BiographyProps> = (connections) => {
  return (
    <div className=" flex flex-col gap-1 w-full">
      {Object.entries(connections.connections).map(([connections, value]) => (
        <div
          key={value}
          className="flex gap-1 w-full justify-between items-center border-b border-b-gray"
        >
          <span className="font-bold">{connections}:</span>

          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
