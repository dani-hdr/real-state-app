
import EstateItem from "./EstateItem";


const EstateList = ({items}) => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-7">
      {items.length === 0 && <div>Nothing was found</div>}

      {items.map((data) => {
        return <EstateItem key={data.id} item={data} />;
      })}
    </div>
  );
};

export default EstateList;
