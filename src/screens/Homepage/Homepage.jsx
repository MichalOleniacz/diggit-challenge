import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPagination";
import VerticalPagination from "../../components/VerticalPagination/VerticalPagination";
// import HomepageWrapper from "../../components/HomepageWrapper/HomepageWrapper";
import IndividualsChart from "../../components/Charts/Individuals/IndividualsChart";
import CompaniesChart from "../../components/Charts/Companies/CompaniesChart";
import DoughnutChart from "../../components/Charts/Doughnut/DoughnutChart";
import GenderSort from "../../components/GenderSort/GenderSort";
import Meetings from "../../components/Meetings/Meetings";

//Data
import { fakeData } from "../../fakeDatabaseService/individuals";
import { fakeCompanies } from "../../fakeDatabaseService/companies";

// Icons
import funds from "../../assets/icons/funds.svg";
import Group from "../../assets/icons/Group.svg";
import SyncIcon from "../../assets/icons/SyncIcon.svg";
import history from "../../assets/icons/history.svg";
import verificationIcon from "../../assets/icons/verificationIcon.svg";
import lockedPadlock from "../../assets/icons/lockedPadlock.svg";

import styles from "./Homepage.module.css";

// DOUGHNUT PROPS HANDLING

class Homepage extends Component {
  state = {
    // I don't really like hard-coding dummy values, unless that's the only solution
    individualsData: [...fakeData()],
    companiesData: [...fakeCompanies()],
    currentUser: "Elsa Andersen",

    // IndvidualsChart
    individuals: {
      labels: [
        "",
        "Jun'19",
        "Jul'19",
        "Aug'19",
        "Sep'19",
        "Oct'19",
        "Nov'19",
        "Dec'19",
        "",
      ],
      label: "Signups",
      data: [0, 9, 3, 6, 4, 4, 3, 9, 8],
    },

    // CompaniesChart
    companies: {
      labels: [
        "",
        "Jun'19",
        "Jul'19",
        "Aug'19",
        "Sep'19",
        "Oct'19",
        "Nov'19",
        "Dec'19",
        "",
      ],
      label: "Signups",
      data: [0, 6, 4, 9, 7, 4, 5, 8, 5],
    },

    // Doughnut Chart
    doughnut: {
      data: [364, 284],
      labels: ["Companies", "Individuals"],
    },

    // HorizontalPagination .map data
    h_pages: [
      { id: 1, name: "Signups" },
      { id: 2, name: "Investment" },
      { id: 3, name: "Revenue" },
      { id: 4, name: "Exits" },
      { id: 5, name: "Trades" },
    ],

    // Selected element of HorizontalPagination
    h_currentPage: 1,

    // VerticalPagination .map data
    v_icons: [
      { id: 1, url: Group },
      { id: 2, url: funds },
      { id: 3, url: SyncIcon },
      { id: 4, url: history },
      { id: 5, url: verificationIcon },
      { id: 6, url: lockedPadlock },
    ],

    // Selected element of VerticalPagination
    v_current: 1,

    // Header Dropdown
    header_info: {
      totalSignups: 648,
      lastWeek: 12,
      totalInvestments: 102,
      currency: "NOK",
      value: "345,565",
      totalExits: 23,
    },

    header_select: [
      { id: 1, name: "option-1" },
      { id: 2, name: "option-2" },
      { id: 3, name: "option-3" },
    ],

    // Displayed value of ddBtn in Header
    header_displayed: "Overview",

    // GenderSort Gender values
    sort_select_gender: [
      { id: 1, name: "Male" },
      { id: 2, name: "Female" },
    ],

    // GenderSort Type values
    sort_select_type: [
      { id: 1, name: "Individuals" },
      { id: 2, name: "Companies" },
    ],

    // GenderSort diplayed values
    sort_displayed_gender: "Gender",
    sort_displayed_gender_id: null,
    sort_displayed_type: "Type",
    sort_displayed_type_id: null,

    // GnederSort displayed output
    sort_displayed_value: undefined,

    // Killing componentDidUpdate Loop
    anti_loop: false,
  };

  // HorizontalPagination onClick Handling
  h_handlePageChange = (page) => {
    console.log(page);
    this.setState({ h_currentPage: page });
  };

  // VerticalPagination onClick Handling
  v_handlePageChange = (icon_id) => {
    console.log(icon_id);
    this.setState({ v_current: icon_id });
  };

  // Passing data to doughnut's inner text
  getDoughnutLenght = () => {
    let length = this.state.doughnut.data.reduce((a, b) => {
      return a + b;
    });

    return length;
  };

  componentDidUpdate() {
    this.sort_handleDisplayedValue();
  }

  sort_handleDisplayedValue = () => {
    let displayedGender = this.state.sort_displayed_gender;
    // let displayedGenderId = this.state
    //   .sort_displayed_gender_id;
    // let displayedTypeId = this.state.sort_displayed_type_id;
    let displayedType = this.state.sort_displayed_type;
    let anti_loop = this.state.anti_loop;
    const companies = [...this.state.companiesData];
    const individuals = [...this.state.individualsData];

    if (displayedGender && displayedType && anti_loop) {
      this.setState({ anti_loop: false });
      if (displayedType === "Companies") {
        let filtered = companies.filter(
          (c) =>
            c.gender.toUpperCase() ===
            displayedGender.toUpperCase()
        );
        let output = filtered.length;

        this.setState({ sort_displayed_value: output });
      } else if (displayedType === "Individuals") {
        let filtered = individuals.filter(
          (c) =>
            c.gender.toUpperCase() ===
            displayedGender.toUpperCase()
        );
        let output = filtered.length;

        this.setState({ sort_displayed_value: output });
      }
    }
  };

  // Sort Gender Handling
  sort_handleClickGender = (
    displayedGender,
    displayedId
  ) => {
    // this.sort_handleValue(displayedId);
    this.setState({
      sort_displayed_gender: displayedGender,
    });
    this.setState({
      sort_displayed_gender_d: displayedId,
    });
    this.setState({ anti_loop: true });
  };

  // Sort Type Handling
  sort_handleClickType = (displayedType, displayedId) => {
    this.setState({ sort_displayed_type: displayedType });
    this.setState({ sort_displayed_type_id: displayedId });
    this.setState({ anti_loop: true });
    console.log(this.state.sort_displayed_type_id);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Navbar user={this.state.currentUser} />
        <Header
          headerInfo={this.state.header_info}
          dropdownData={this.state.header_select}
          displayed={this.state.header_displayed}
        />
        <div className={styles.mainBoard}>
          <div className={styles.verticalWrapper}>
            <VerticalPagination
              pages={this.state.v_icons}
              currentPage={this.state.v_current}
              onPageChange={(icon_id) =>
                this.v_handlePageChange(icon_id)
              }
            />
          </div>
          <div className={styles.board}>
            <HorizontalPagination
              pages={this.state.h_pages}
              currentPage={this.state.h_currentPage}
              onPageChange={(page) =>
                this.h_handlePageChange(page)
              }
            />
            <div className={styles.display}>
              <div className={styles.displayCharts}>
                <div className={styles.upperChart}>
                  <IndividualsChart
                    labels={this.state.individuals.labels}
                    label={this.state.individuals.label}
                    data={this.state.individuals.data}
                    key={1}
                  />
                </div>
                <div className={styles.lowerChart}>
                  <CompaniesChart
                    labels={this.state.companies.labels}
                    label={this.state.companies.label}
                    data={this.state.companies.data}
                  />
                </div>
              </div>
              <div className={styles.displayInfo}>
                <div className={styles.donutWrapper}>
                  <div className={styles.chartWrapper}>
                    <DoughnutChart
                      labels={this.state.doughnut.labels}
                      data={this.state.doughnut.data}
                    />
                    <div className={styles.donutLength}>
                      <h2>{this.getDoughnutLenght()}</h2>
                    </div>
                  </div>
                  <div className={styles.chartInfoWrapper}>
                    <h2>Total Signups</h2>
                    <div className={styles.chartStats}>
                      {/* REVERSED FOR THE CHART */}

                      <p className={styles.pCol}>
                        <span>
                          {this.state.doughnut.labels[0]}
                        </span>
                        <span className={styles.companies}>
                          {this.state.doughnut.data[0]}
                        </span>
                      </p>
                      <p className={styles.pCol}>
                        <span>
                          {this.state.doughnut.labels[1]}
                        </span>
                        <span
                          className={styles.individuals}>
                          {this.state.doughnut.data[1]}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.sort}>
                  <GenderSort
                    selectGender={
                      this.state.sort_select_gender
                    }
                    selectType={this.state.sort_select_type}
                    displayedGender={
                      this.state.sort_displayed_gender
                    }
                    displayedType={
                      this.state.sort_displayed_type
                    }
                    displayedValue={
                      this.state.sort_displayed_value
                    }
                    // Catch gender change
                    onClickGender={(
                      displayedGender,
                      displayedId
                    ) =>
                      this.sort_handleClickGender(
                        displayedGender,
                        displayedId
                      )
                    }
                    // Catch Type change
                    onClickType={(
                      displayedType,
                      displayedId
                    ) =>
                      this.sort_handleClickType(
                        displayedType,
                        displayedId
                      )
                    }
                  />
                </div>
                <div className={styles.meetings}>
                  <Meetings
                    individuals={this.state.individualsData}
                    companies={this.state.companiesData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
