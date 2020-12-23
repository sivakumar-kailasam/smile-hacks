import {
  Card,
  DataTable,
  FooterHelp,
  Heading,
  Layout,
  Link,
  Page,
  Stack,
  TextStyle
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { Line } from "react-chartjs-2";
import { ambassadorData, revenueData } from "./chartData";

function sortCurrency(rows, index, direction) {
  return [...rows].sort((rowA, rowB) => {
    const amountA = parseFloat(rowA[index].substring(1));
    const amountB = parseFloat(rowB[index].substring(1));

    return direction === "descending" ? amountB - amountA : amountA - amountB;
  });
}


export default function AmbassadorAnalytics() {
  const breadcrumbs = [{ content: "Ambassadors" }];

  const initiallySortedRows = [
    [
      <Link url="https://www.example.com" key="emerald-silk-gown">
        Michelle
      </Link>,
      "$875.00",
      1900,
      "$1,500.00"
    ],
    [
      <Link url="https://www.example.com" key="mauve-cashmere-scarf">
        Nate
      </Link>,
      "$230.00",
      1234,
      "$1,400.00"
    ],
    [
      <Link url="https://www.example.com" key="navy-merino-wool">
        Jobie
      </Link>,
      "$445.00",
      824,
      "$1,300.00"
    ],
    [
      <Link url="https://www.example.com" key="navy-merino-wool">
        Siva
      </Link>,
      "$945.00",
      732,
      "$1,200.00"
    ]
  ];
  const [sortedRows, setSortedRows] = useState(null);

  const rows = sortedRows ? sortedRows : initiallySortedRows;

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows]
  );

  return (
    <Page title="Performance overview" breadcrumbs={breadcrumbs}>
      <Layout>
        <Layout.Section>
          <Stack vertical spacing="extraLoose">
            <Card sectioned>
              <Stack alignment="center" distribution="equalSpacing">
                <Heading>Number of Ambassadors</Heading>
                <TextStyle variation="subdued">Last year</TextStyle>
              </Stack>
              <Line data={ambassadorData} />
            </Card>
            <Card sectioned>
              <Stack alignment="center" distribution="equalSpacing">
                <Heading>Revenue</Heading>
                <TextStyle variation="subdued">Last year</TextStyle>
              </Stack>
              <Line data={revenueData} />
            </Card>

            <Card title="Top Ambasssadors" sectioned>
              <DataTable
                columnContentTypes={["text", "numeric", "numeric", "numeric"]}
                headings={["Name", "Spend", "# of referrals", "Attributed revenue"]}
                rows={rows}
                totals={["", "$2,495", 4690, "$5,400.00"]}
                sortable={[false, true, true, true]}
                defaultSortDirection="descending"
                initialSortColumnIndex={3}
                onSort={handleSort}
              />
            </Card>
          </Stack>
        </Layout.Section>
        <Layout.Section>
          <FooterHelp>
            For more details on social polls, visit our{" "}
            <Link url="https://polaris.shopify.com">docs</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
