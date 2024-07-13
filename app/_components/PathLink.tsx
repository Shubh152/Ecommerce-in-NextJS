'use clent'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function PathLink() {
  return (
    <Breadcrumb paddingX='20px' spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/shop">On Sale</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
