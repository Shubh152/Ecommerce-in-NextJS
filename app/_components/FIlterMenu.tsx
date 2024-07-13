import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  CheckboxGroup,
  Stack,
  Heading,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { brandFilter, priceFilter } from "../_store/atoms";

export default function FilterMenu() {
  const setPrice = useSetRecoilState(priceFilter);
  const price = useRecoilValue(priceFilter);
  const setBrand = useSetRecoilState(brandFilter);

  return (
    <div className="w-1/5 border-text border-solid border rounded-md h-fit">
      <Heading paddingY="10px" paddingX="20px" fontSize="25px">
        Filters{" "}
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              Price
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup colorScheme="brand" onChange={setPrice} value={price}>
              <Stack direction="column">
                <Radio value="All" isChecked={true} defaultChecked={true}>
                  All Products
                </Radio>
                <Radio value="500">Under 500</Radio>
                <Radio value="1000">Under 1000</Radio>
                <Radio value="1500">Under 1500</Radio>
                <Radio value="2000">Under 2000</Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              Brands
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckboxGroup
              onChange={(event) => {
                setBrand(event);
              }}
              colorScheme="brand"
            >
              <Stack spacing={4} direction={"column"}>
                <Checkbox value="LenomTree">Lemon Tree</Checkbox>
                <Checkbox value="Ocean">Ocean</Checkbox>
                <Checkbox value="Vignetto">Vignetto</Checkbox>
                <Checkbox value="Freelance">Freelance</Checkbox>
                <Checkbox value="Dubblin">Dubblin</Checkbox>
                <Checkbox value="Treo">Treo</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
