import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Seperator from "./Seperator";
import ReviewTile from "./ReviewTile";

export default function ProductTabs({ review }) {
  return (
    <div className="p-5" >
      <Tabs isLazy colorScheme="brand">
        <TabList>
          <Tab>Reviews</Tab>
          <Tab>Product Details</Tab>
          <Tab>FAQs</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            {review.map((review) => {
              return <ReviewTile review={review} />;
            })}
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>{review[1]}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
