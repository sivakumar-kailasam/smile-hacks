import {
  Card,
  DisplayText,
  FooterHelp,
  Heading,
  Layout,
  Link,
  Page,
  Stack,
  TextContainer
} from "@shopify/polaris";
import React from "react";

import { Bar, HorizontalBar, Line } from "react-chartjs-2";
import { votingData } from "./chartData";

/**
 * how people voted
 * social metrics shares re-tweets
 * $$$ earned
 * follower delta
 * member delta
 */
export default function Analytics() {
  const breadcrumbs = [{ content: "Social campaigns" }];

  return (
    <Page title="Pick our next holiday flavor!" breadcrumbs={breadcrumbs}>
      <Layout>
        <Layout.Section>
          <Stack vertical spacing="extraLoose">
            <Stack distribution="fillEvenly">
              <Card title="How people voted" sectioned>
                <HorizontalBar data={votingData} />
              </Card>
            </Stack>
            <Stack distribution="fillEvenly">
              <Card title="Performance" sectioned>
                <Stack vertical spacing="loose">
                  <Stack>
                    <Stack.Item fill>
                      <DisplayText size="large">New revenue</DisplayText>
                    </Stack.Item>
                    <Stack.Item>
                      <DisplayText size="large">$18,567</DisplayText>
                    </Stack.Item>
                  </Stack>

                  <Stack vertical spacing="tight">
                    <Stack>
                      <Stack.Item fill>Shares</Stack.Item>
                      <Stack.Item>345</Stack.Item>
                    </Stack>
                    <Stack>
                      <Stack.Item fill>Retweets</Stack.Item>
                      <Stack.Item>124</Stack.Item>
                    </Stack>
                    <Stack>
                      <Stack.Item fill>New followers</Stack.Item>
                      <Stack.Item>532</Stack.Item>
                    </Stack>
                    <Stack>
                      <Stack.Item fill>New members</Stack.Item>
                      <Stack.Item>52</Stack.Item>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
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
