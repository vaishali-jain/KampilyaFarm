// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: '#ffffff',
//     color: '#333333',
//   },
//   indicator: {
//     backgroundColor: '#ff0000',
//   },
//   tab: {
//     '&:hover': {
//       backgroundColor: '#00ff00',
//     },
//     '&$selected': {
//       backgroundColor: '#0000ff',
//       color: '#ffffff',
//     },
//   },
//   selected: {},
// });

// function TabPanel(props) {
//   const { children, value, index } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//     >
//       {value === index && (
//         <div>
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   value: PropTypes.number.isRequired,
//   index: PropTypes.number.isRequired,
// };

// function ThreeTabs() {
//   const [value, setValue] = useState(0);
//   const classes = useStyles();

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <Tabs value={value} onChange={handleChange} classes={{ root: classes.root, indicator: classes.indicator }} aria-label="tabs example">
//         <Tab label="Tab 1" id="tab-0" classes={{ root: classes.tab, selected: classes.selected }} />
//         <Tab label="Tab 2" id="tab-1" classes={{ root: classes.tab, selected: classes.selected }} />
//         <Tab label="Tab 3" id="tab-2" classes={{ root: classes.tab, selected: classes.selected }} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         <h2>Tab 1</h2>
//         <p>This is the content for Tab 1.</p>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <h2>Tab 2</h2>
//         <p>This is the content for Tab 2.</p>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <h2>Tab 3</h2>
//         <p>This is the content for Tab 3.</p>
//       </TabPanel>
//     </div>
//   );
// }

// export default ThreeTabs;
