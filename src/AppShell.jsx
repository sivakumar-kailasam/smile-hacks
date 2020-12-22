import React, { useState, useCallback } from "react";
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  AppProvider,
  TopBar,
  ActionList,
  Frame
} from "@shopify/polaris";
import { ArrowLeftMinor, ImportMinor } from "@shopify/polaris-icons";

export function AppShell(props) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const topBarColors = {
    background: "#FFFFFF",
    backgroundLighter: "#F4F6F8",
    backgroundDarker: "#DFE3E8",
    border: "#C4CDD5",
    color: "#212B36"
  };

  const theme = {
    colors: {
      topBar: topBarColors
    },
    logo: {
      width: 124,
      topBarSource: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 266 46' class='branding-logo'%3E%3Cpath d='M194.1 16.3c2.6 2.9 3.9 6.7 3.9 11.6v1.7c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.2.5h-21.6v.4c.1 2.8.9 4.9 2.5 6.5 1.6 1.6 3.7 2.4 6.2 2.4 2.1 0 3.7-.3 4.9-.8 1.2-.5 2.2-1.3 3.1-2.3.3-.3.6-.6.9-.7.3-.1.6-.2 1.1-.2h1.9c.5 0 .9.2 1.3.5.3.3.5.7.4 1.2-.2 1.1-.8 2.3-1.9 3.5-1.1 1.2-2.6 2.2-4.6 3-2 .8-4.4 1.2-7.1 1.2-2.7 0-5.1-.6-7.2-1.9-2.1-1.2-3.8-2.9-5-5.1-1.2-2.2-2-4.6-2.2-7.4-.1-1.3-.1-2.2-.1-2.9 0-.7 0-1.6.1-2.9.3-2.6 1-5 2.2-7.1 1.2-2.1 2.9-3.8 5-5 2.1-1.2 4.5-1.8 7.2-1.8 4.6.1 8.1 1.5 10.7 4.4zm-1.8 9.7v-.2c0-2.6-.8-4.6-2.4-6.1-1.6-1.5-3.8-2.3-6.4-2.3-2.4 0-4.5.8-6.2 2.3-1.7 1.6-2.6 3.6-2.6 6.1v.2h17.6zm20.2 11.5c.4.4.5.8.5 1.3v4.4c0 .5-.2.9-.5 1.3-.4.4-.8.5-1.3.5h-4.4c-.5 0-.9-.2-1.3-.5-.4-.4-.5-.8-.5-1.3v-4.4c0-.5.2-.9.5-1.3.4-.4.8-.5 1.3-.5h4.4c.5 0 .9.2 1.3.5zm53.5-8.4c0 1 0 2-.1 2.9-.4 4.3-1.9 7.7-4.4 10.2-2.6 2.5-6.1 3.8-10.5 3.8s-7.9-1.3-10.5-3.8c-2.6-2.5-4.1-6-4.4-10.2 0-.5-.1-1.4-.1-2.9 0-1.6 0-2.6.1-3 .3-4.3 1.8-7.7 4.4-10.2 2.6-2.5 6.1-3.8 10.5-3.8s7.9 1.3 10.5 3.8c2.6 2.5 4.1 5.9 4.4 10.2.1.9.1 1.9.1 3zm-8.5-9.2c-1.5-1.6-3.7-2.5-6.5-2.5s-5 .8-6.5 2.5c-1.5 1.6-2.4 3.8-2.7 6.5 0 .5-.1 1.4-.1 2.7 0 1.3 0 2.1.1 2.6.3 2.7 1.1 4.8 2.7 6.5 1.5 1.6 3.7 2.5 6.5 2.5s5-.8 6.5-2.5c1.5-1.6 2.4-3.8 2.7-6.5.1-.9.1-1.8.1-2.6s0-1.7-.1-2.7c-.3-2.7-1.2-4.9-2.7-6.5zm-30.6 24.6c-.3.3-.7.5-1.2.5h-2.3c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V13.8c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5h2.3c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v29.5c0 .5-.2.9-.5 1.2zM226.3 7h-3.6c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V1.7c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5h3.6c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v3.6c0 .5-.2.9-.5 1.2-.3.4-.7.5-1.2.5zm-65.8 37.5c-.4.3-.8.5-1.3.5h-2.4c-.5 0-.9-.2-1.3-.5s-.5-.7-.5-1.2V1.7c0-.5.2-.9.5-1.2.4-.3.8-.5 1.3-.5h2.4c.5 0 .9.2 1.3.5s.5.7.5 1.2v41.6c0 .5-.2.9-.5 1.2zM49.6 21.4c0-1.7.5-3.3 1.4-4.7.9-1.4 2.4-2.6 4.2-3.4 1.9-.9 4.2-1.3 6.9-1.3s5 .4 6.9 1.1c1.9.8 3.4 1.7 4.4 2.8 1 1.1 1.5 2.2 1.5 3.3 0 .4-.2.8-.5 1.1-.3.3-.8.5-1.2.5h-2.1c-.8 0-1.5-.3-1.9-.9-1.3-1.7-3.7-2.5-7-2.5-2 0-3.6.4-4.8 1.1-1.2.7-1.8 1.7-1.8 3 0 1 .3 1.8.9 2.4.6.5 1.5 1 2.7 1.3 1.2.3 3.3.8 6.4 1.5 3.8.8 6.5 2 8.1 3.7 1.6 1.6 2.4 3.6 2.4 6 0 1.7-.6 3.3-1.6 4.8-1.1 1.5-2.7 2.7-4.7 3.6-2 .9-4.4 1.4-7.1 1.4-2.7 0-5-.4-7.1-1.2-2-.8-3.6-1.8-4.7-3s-1.7-2.3-1.7-3.3c0-.4.2-.8.5-1.1.3-.3.8-.5 1.2-.5h2.3c.4 0 .7 0 1 .1.3.1.6.3.8.7 1.4 1.9 3.9 2.9 7.6 2.9 2 0 3.8-.4 5.3-1.2 1.5-.8 2.3-1.8 2.3-3.1 0-1-.4-1.8-1.1-2.4-.8-.6-1.8-1.1-3.3-1.5-1.4-.4-3.6-.9-6.7-1.5-6.3-1.6-9.5-4.7-9.5-9.7zm43.5-9.2c1.3-.8 2.9-1.2 5-1.2 4.9 0 8.4 1.9 10.3 5.6 1.2-1.8 2.6-3.2 4.2-4.1s3.6-1.4 6.1-1.4c4.1 0 7.2 1.3 9.2 3.8 2 2.5 3 6.1 3 10.7v17.8c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.2.5h-2.3c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V26.3c0-6.4-2.5-9.6-7.4-9.6-2.3 0-4.1.8-5.4 2.3-1.3 1.5-2 3.8-2 6.9v17.6c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.2.5h-2.3c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V26.4c0-6.4-2.5-9.6-7.4-9.6-2.3 0-4.1.8-5.4 2.3-1.3 1.5-2 3.8-2 6.9v17.6c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.2.5h-2.3c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V13.7c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5h2.3c.5 0 .9.2 1.2.5.3.3.5.8.5 1.2v2c.9-1.7 2-2.7 3.2-3.5zm51.8 32.3c-.3.3-.7.5-1.2.5h-2.3c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V13.8c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5h2.3c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v29.5c0 .5-.2.9-.5 1.2zm.6-38c-.3.3-.7.5-1.2.5h-3.6c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V1.7c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5h3.6c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v3.6c0 .5-.2.9-.5 1.2z' fill='%23424242'%3E%3C/path%3E%3Cpath d='M28.3 19H26c-.5 0-.9.2-1.2.5-.3.3-.5.7-.5 1.1 0 .2 0 1.7-.1 2.6-.2 2.7-1.1 4.8-2.6 6.4-1.5 1.6-3.6 2.4-6.4 2.4-2.7 0-4.9-.8-6.4-2.4-1.5-1.6-2.4-3.8-2.6-6.4-.1-.9-.1-2.4-.1-2.6 0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.2-.5H2.1c-.5 0-.9.2-1.2.5-.3.3-.5.6-.5 1.1 0 0 .1 2.4.1 2.9.4 4.2 1.8 7.6 4.4 10.1 2.5 2.5 5.9 3.8 10.2 3.8h.1c4.3 0 7.7-1.3 10.2-3.8 2.6-2.5 4-5.9 4.4-10.1 0-.5.1-2.9.1-2.9 0-.5-.2-.8-.5-1.1-.2-.3-.6-.5-1.1-.5z' fill='%23ffc828'%3E%3C/path%3E%3C/svg%3E`,
      url: "https://smile.io",
      accessibilityLabel: "Shopify Plus"
    }
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={
        [
          // {
          //   items: [{ content: "Back to Shopify Plus", icon: ArrowLeftMinor }]
          // },
          // {
          //   items: [{ content: "Community forums" }]
          // }
        ]
      }
      name="Bliss Dough"
      // detail="Bliss Dough"
      initials="S"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup = (
    <ActionList items={[{ content: "Shopify help center" }, { content: "Community forums" }]} />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search customer name or email"
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  return (
    <div style={{ height: "250px" }}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: "Avatar",
              labelWithInitials: "Avatar with initials {initials}"
            },
            Frame: { skipToContent: "Skip to content" },
            TopBar: {
              toggleMenuLabel: "Toggle menu",
              SearchField: {
                clearButtonLabel: "Clear",
                search: "Search"
              }
            }
          }
        }}
      >
        <Frame topBar={topBarMarkup}>{props.children}</Frame>
      </AppProvider>
    </div>
  );
}
