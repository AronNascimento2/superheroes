// import "./styles.css";

// const CharacterProgressBar = (attributes) => {
//   // Calcula uma média ponderada dos atributos para determinar a cor da barra de progresso
//   const averageAttributeValue =
//     Object.values(attributes).reduce((sum, value) => sum + value, 0) /
//     Object.keys(attributes).length;

//   // Define cores personalizadas para cada atributo
//   const attributeColors = {
//     strength: "blue",
//     attack: "red",
//     defense: "green",
//     specialAttack: "purple",
//     specialDefense: "orange",
//     speed: "yellow",
//     hp: "pink",
//   };

//   // Determine a classe de estilo com base na média ponderada dos atributos
//   const progressBarClass =
//     averageAttributeValue < 50 ? "progress-bar low-attribute-value" : "";

//   return (
//     <div className="bar">
//       {Object.entries(attributes).map(([attribute, value]) => (
//         <div className={progressBarClass}>
//           <div
//             key={attribute}
//             className="progress"
//             style={{
//               width: `${value}%`,
//               backgroundColor: attributeColors[attribute],
//             }}
//           ></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CharacterProgressBar;
