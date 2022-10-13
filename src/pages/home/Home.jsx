import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Widget from "../../component/widget/Widget";
import Chart from "../../component/chart/Chart";
import "./Home.scss";
import Features from "../../component/features/Features";
import List from "../../component/table/Table";

const Home = ({ aspect }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Features />
          <Chart aspect={2 / 1} title="Last 6 Months" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
