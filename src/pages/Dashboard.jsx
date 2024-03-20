import { DashboardIcon } from "../assets/constants";
import Header from "../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../data";

export default function Dashboard() {
  return (
    <>
      <Header icon={<DashboardIcon />} title={"Dashboard"} />
      <Navigation data={DashBoardRightMenu} />
    </>
  );
}
