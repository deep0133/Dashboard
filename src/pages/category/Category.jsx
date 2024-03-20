import { CategoryIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { CategroyRightMenu } from "../../data";

export default function Category() {
  return (
    <>
      <Header icon={<CategoryIcon />} title={"Category"} />
      <Navigation data={CategroyRightMenu} />
    </>
  );
}
