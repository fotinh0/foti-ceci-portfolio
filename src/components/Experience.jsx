import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import myData from "../myData.json";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

let experiences = myData.experiences;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="experience" className="bg-[#0a192f] pt-16 min-h-55 md:min-h-50">
      <div className="relative isolate  pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Where I&apos;ve Worked
            </h2>
          </div>
          <div className="mx-auto mt-10  gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-20 lg:max-w-none">
            <Box
              sx={{
                display: "flex",
                maxHeight: 400,
              }}
              className="custom-vertical-tabs"
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Job tabs"
                className="vertical-tabs"
                sx={{
                  borderRight: 0.5,
                  borderColor: "#d1d5db",
                  minWidth: "12rem",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#464fe5",
                  },
                  "& .MuiTab-root": {
                    "&.MuiButtonBase-root": {
                      color: "#d1d5db",
                    },
                    "&.Mui-selected": {
                      color: "#8DA2FB",
                    },
                  },
                }}
              >
                {experiences.map((job) => {
                  return (
                    <Tab
                      key={job.id}
                      label={job.company}
                      {...a11yProps(job.id)}
                    />
                  );
                })}
              </Tabs>
              {experiences.map((job) => {
                return (
                  <TabPanel
                    key={job.id}
                    value={value}
                    index={job.id}
                    className="w-full"
                  >
                    <div className="flex flex-col">
                      <div className="text-left text-md">
                        <time dateTime={"2023-02-1"} className="text-gray-300 ">
                          {job.duration}
                        </time>
                      </div>
                      <div className="">
                        <h3 className="mt-3 text-left text-lg font-semibold leading-6 text-white">
                          {job.position}{" "}
                          <span className="cursor-pointer font-bold text-indigo-400">
                            @{" "}
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {job.company}
                            </a>
                          </span>
                        </h3>

                        <ul
                          role="list"
                          className="mt-3 gap-4 text-sm leading-6 text-gray-300 sm:gap-4"
                        >
                          {job.description.map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-x-3 mb-3 text-left"
                            >
                              <ChevronDoubleRightIcon
                                className="h-6 w-5 flex-none text-indigo-400"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
            </Box>

            <Box className="custom-horizontal-tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Job tabs"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                className="horizontal-tabs" // Hide for small screens
                sx={{
                  borderBottom: 0.5,
                  borderColor: "#d1d5db",
                  minWidth: "12rem",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#464fe5",
                  },
                  "& .MuiTabs-scrollButtons": {
                    color: "white",
                  },
                  "& .MuiTab-root": {
                    "&.MuiButtonBase-root": {
                      color: "#d1d5db",
                    },
                    "&.Mui-selected": {
                      color: "#8DA2FB",
                    },
                  },
                }}
              >
                {experiences.map((job) => {
                  return (
                    <Tab
                      key={job.id}
                      label={job.company}
                      {...a11yProps(job.id)}
                    />
                  );
                })}
              </Tabs>
              {experiences.map((job) => {
                return (
                  <TabPanel
                    key={job.id}
                    value={value}
                    index={job.id}
                    className="w-full"
                  >
                    <div className="flex flex-col">
                      <div className="text-left text-md">
                        <time dateTime={"2023-02-1"} className="text-gray-300 ">
                          {job.duration}
                        </time>
                      </div>
                      <div className="">
                        <h3 className="mt-3 text-left text-lg font-semibold leading-6 text-white">
                          {job.position}{" "}
                          <span className="cursor-pointer font-bold text-indigo-400">
                            @ <a href={job.url}>{job.company}</a>
                          </span>
                        </h3>

                        <ul
                          role="list"
                          className="mt-3 gap-4 text-sm leading-6 text-gray-300 sm:gap-4"
                        >
                          {job.description.map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-x-3 mb-3 text-left"
                            >
                              <ChevronDoubleRightIcon
                                className="h-6 w-5 flex-none text-indigo-400"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
