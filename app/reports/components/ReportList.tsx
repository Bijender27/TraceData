import React from 'react'
import ReportItem from './ReportItem';
type reportData = {
  reportId: string;
  title: string;
  subTitle: string;
  pages: number;
  publishDate: number | Date;
  baseYear: number;
  startingPrice: number;
  urlSlug: string;
}[];


const data: reportData = [
  {
    reportId: "TD001",
    title: "KSA POS Lending Market Outlook to 2028",
    subTitle:
      "Driven by technological advancements, supportive regulatory measures, innovations and a shift in consumer preferences Driven by technological advancements, supportive regulatory measures, innovations and a shift in consumer preferences",
    pages: 78,
    publishDate: new Date("2015-03-25"),
    baseYear: 2024,
    startingPrice: 1200,
    urlSlug: "kas-pos-lending-market",
  },
  {
    reportId: "TD002",
    title: "UAE POS Lending Market Outlook to 2028",
    subTitle:
      "Driven by technological advancements, supportive regulatory measures, innovations and a shift in consumer preferences Driven by technological advancements, supportive regulatory measures, innovations and a shift in consumer preferences",
    pages: 78,
    publishDate: new Date("2015-03-25"),
    baseYear: 2024,
    startingPrice: 1200,
    urlSlug: "uae-pos-lending-market",
  },
];

const ReportList = () => {
  return (
    <div>
      {data.map(report=>{
        return <ReportItem key={report.reportId} {...report} />;
      })}
     
     
    </div>
  );
}

export default ReportList