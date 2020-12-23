import {
  Button,
  Card,
  ChoiceList,
  FooterHelp,
  FormLayout,
  Layout,
  Link,
  Page,
  Stack,
  TextField
} from "@shopify/polaris";
import { CalendarMinor, DeleteMinor, DragHandleMinor } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";

export default function CreatePoll() {
  const [first, setFirst] = useState("Pick our next holiday flavour!");
  const [caption, setCaption] = useState(
    "If your favourite wins, you’ll get a free pint on us when you place your next order."
  );

  const handleFirstChange = useCallback((value) => setFirst(value), []);
  const handleLastChange = useCallback((value) => setCaption(value), []);

  const breadcrumbs = [{ content: "Social campaigns" }];
  const primaryAction = { content: "Publish" };

  const options = ["peppermint sugar", "classic pecan snowball", "fluffed nutter"];
  const [selected, setSelected] = useState(["twitter", "fb"]);

  const handleChange = useCallback((value) => setSelected(value), []);

  const SocialOptions = () => (
    <ChoiceList
      allowMultiple
      title=""
      choices={[
        {
          label: (
            <Stack spacing="extraTight">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/179/179319.svg"
                height="20"
                width="20"
                alt="facebook"
              />
              <span>
                (<a href="https://instagram.com">bliss.dough</a>)
              </span>
            </Stack>
          ),
          value: "fb"
        },
        {
          label: (
            <Stack spacing="extraTight">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/1409/1409937.svg"
                height="20"
                width="20"
                alt="twitter"
              />
              <span>
                (<a href="https://instagram.com">@blissdough</a>)
              </span>
            </Stack>
          ),
          value: "twitter"
        },
        {
          label: (
            <Stack spacing="extraTight">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg"
                height="20"
                width="20"
                alt="instagram"
              />
              <span>
                (<a href="https://instagram.com">@blissdough</a>)
              </span>
            </Stack>
          ),
          value: "instagram"
        }
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );

  return (
    <Page title="New poll" breadcrumbs={breadcrumbs} primaryAction={primaryAction}>
      <Layout>
        <Layout.AnnotatedSection
          title="Poll"
          description="Create a poll across your social media accounts & award winners"
        >
          <Card sectioned title="Accounts to post to">
            <SocialOptions />
          </Card>
          <Card sectioned>
            <FormLayout>
              <FormLayout.Group>
                <TextField value={first} label="Title" onChange={handleFirstChange} />
              </FormLayout.Group>

              <FormLayout.Group>
                <TextField
                  value={caption}
                  multiline={2}
                  label="Caption"
                  onChange={handleLastChange}
                />
              </FormLayout.Group>

              <FormLayout.Group>
                <Stack distribution="fillEvenly">
                  <TextField
                    value={"25-Dec-2020 8:00AM ET"}
                    label="Start time"
                    onChange={handleLastChange}
                    connectedRight={<Button icon={CalendarMinor} accessibilityLabel="" />}
                  />
                  <TextField
                    value={"27-Dec-2020 10:00PM ET"}
                    label="End time"
                    onChange={handleLastChange}
                    connectedRight={<Button icon={CalendarMinor} accessibilityLabel="" />}
                  />
                </Stack>
              </FormLayout.Group>

              <FormLayout.Group title="Options">
                <Stack vertical>
                  {options.map(function (option, i) {
                    return (
                      <TextField
                        key={i}
                        label=""
                        value={option}
                        onChange={handleLastChange}
                        clearButton
                        onClearButtonClick={"handleLastChange"}
                        connectedLeft={<Button icon={DragHandleMinor} accessibilityLabel="Drag" />}
                        connectedRight={
                          <Button icon={DeleteMinor} accessibilityLabel="Remove item" />
                        }
                      />
                    );
                  })}
                  <Button>Add another option</Button>
                </Stack>
              </FormLayout.Group>
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

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
