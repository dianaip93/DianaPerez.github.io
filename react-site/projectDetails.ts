import { MouseEventHandler } from "react";

export enum ProjectNames {
  Bikes,
  Destinations,
}

export type ArticleType = {
  superTitle?: string;
  title: string;
  body?: string;
  imageSrc?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  buttonText?: string;
  href?: string;
};

export type Details = {
  superTitle?: string;
  title: string;
  body: string;
  imageSrc?: string;
  buttonText?: string;
  sections: Array<ArticleType>;
};

export const projectDetails: Record<ProjectNames, Details> = {
  [ProjectNames.Bikes]: {
    superTitle: "Gearing Up for Success",
    title: "Sales & Profit Insights",
    buttonText: "View Project",
    imageSrc: "./BikeProject.jpg",
    body: `This project analyzes a retail sales dataset, transforming raw transaction data into meaningful insights for business decision-making. The dataset includes customer demographics, product details, sales transactions, and financial metrics, allowing for a comprehensive exploration of sales performance across different locations, product categories, and time periods.

The process began with data cleaning in SQL to ensure accuracy and consistency, followed by exploratory queries to uncover trends in sales, profit margins, and customer purchasing behavior. A Tableau dashboard was then developed, providing an interactive overview of key metrics such as sales and profit over time, product performance, and regional trends. By leveraging these insights, businesses can better understand their top-performing products, seasonal sales patterns, and customer preferences, ultimately improving strategic decision-making and profitability.
`,
    sections: [
      {
        title: "Cleaning in SQL",
        body: "While the dataset was largely clean, this section highlights the SQL queries used to identify and address potential data inconsistencies, including duplicates, null values, and formatting issues, ensuring accuracy before analysis.",
        href: "https://github.com/dianaip93/Sales_and_Profit_Insights_Project/blob/main/1.%20Data%20Cleaning.sql",
        buttonText: "View Queries",
      },
      {
        title: "Exploration in SQL Server",
        href: "https://github.com/dianaip93/Sales_and_Profit_Insights_Project/blob/main/2.%20Data%20Exploration.sql",
        buttonText: "View Queries",
        body: "This section showcases SQL queries used to uncover key business insights, such as sales trends, customer age distribution, product profitability, and top-performing locations. By analyzing sales performance across different categories and demographics, this phase provides a foundation for strategic decision-making.",
      },

      {
        title: "Visualization with Tableau",
        href: "https://public.tableau.com/app/profile/diana.perez.perez/viz/SALESINSIGHTS_Dashboard/OVERVIEWDASHBOARD",
        buttonText: "View Dashboard",
        body: "The interactive Tableau dashboard offers a comprehensive performance overview of revenue, cost, and sales trends across time, location, customer demographics, and product categories. Additionally, two deep-dive dashboards allow for a more detailed analysis of specific product categories and regional sales performance, enabling stakeholders to explore key trends and optimize business strategies.",
      },
    ],
  },
  [ProjectNames.Destinations]: {
    superTitle: "Destination Trends",
    title: "Where, How, and Who",
    buttonText: "View Project",
    imageSrc: "./TravelerTripsDashboard.jpg",
    body: `This project analyzes a traveler trips dataset, transforming raw data into actionable insights for a travel agency. The process began with data cleaning in SQL to ensure accuracy and consistency, followed by exploratory analysis to uncover trends in traveler demographics, preferred destinations, and seasonal patterns. Key business questions were addressed, such as identifying the right target market for each destination, selecting optimal accommodations, and planning trips during peak seasons. A dynamic Tableau dashboard was then developed, allowing users to compare cities, filter by demographics, and dive deeper into travel behaviors. While the dataset’s size poses challenges for query performance, these analyses can be regularly updated as new data is collected, helping the agency adapt to evolving travel trends and make data-driven decisions.`,
    sections: [
      {
        title: "Cleaning in SQL",
        body: "Focused on data cleaning to ensure accuracy and consistency, this section highlights techniques like handling missing values, removing duplicates, correcting errors, splitting columns, and standardizing formats to prepare the dataset for analysis.",
        href: "https://github.com/dianaip93/Traveler-Trips-Project/blob/main/3.%20Data%20Cleaning.sql",
        buttonText: "View Queries",
      },
      {
        title: "Exploration in SQL Server",
        href: "https://github.com/dianaip93/Traveler-Trips-Project/blob/main/4.%20Exploratory%20Data%20Analysis.sql",
        buttonText: "View Queries",
        body: "Using the traveler trips dataset, SQL queries and analytical techniques were applied to uncover trends based on city, age, and demographics. This includes filtering and aggregating data, calculating key metrics, and segmenting travelers to identify patterns in behavior and preferences.",
      },

      {
        title: "Visualization with Tableau",
        buttonText: "View Dashboard",
        href: "https://public.tableau.com/app/profile/diana.perez.perez/viz/TRAVELERTRIP_Dashboard/TRAVELERTRIPS",
        body: "Designed and developed a dynamic Tableau dashboard to provide a comprehensive analysis of key travel trends. The dashboard features an interactive city filter, allowing users to compare metrics across all cities or focus on specific cities of interest. Visualizations include insights into the most visited cities, seasonal travel patterns, average traveler age, popular accommodations, trip durations, and spending, empowering stakeholders to explore and understand traveler behaviors with ease.",
      },
    ],
  },
};
