import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";



export default function Home() {
  return (
    <div className="home">
     
      <Chart data={[]} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
       
      </div>
    </div>
  );
}
