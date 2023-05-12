import React, { useContext, useState, createContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
const SiteSettingsContext = createContext();

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}

export function SiteSettingsProvider({ children }) {
  const data = useStaticQuery(graphql`
    query SiteSettings {
      allSanityBranding {
        edges {
          node {
            id
            companyName
            companyTagline
            logo {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 350)
              }
            }
            logoWhite {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 350)
              }
            }
          }
        }
      }
    }
  `);

  const siteSettings = data.allSanityBranding.edges[0].node;

  return (
    <SiteSettingsContext.Provider value={{ siteSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}
