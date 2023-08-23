export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ouclass",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element; //type of icon
  title: string;
  description: string;
}
