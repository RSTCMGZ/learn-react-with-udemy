import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material'
import { LessonCustomization } from './components/LessonCustomization';
// import { LessonMasonry } from './components/LessonMasonry';
// import { LessonTimeLine } from './components/LessonTimeLine';
// import { LessonTabs } from './components/LessonTabs';
// import { LessonDateTime } from './components/LessonDateTime';
// import { LessonTable } from './components/LessonTable';
// import { LessonLoadingButton } from './components/LessonLoadingButton';
// import LessonProgress from './components/LessonProgress';
// import LessonSkeleton from './components/LessonSkeleton';
// import LessonSnackBars from './components/LessonSnackBars';
// import LessonAlert from './components/LessonAlert';
// import LessonDialog from './components/LessonDialog';
// import LessonToolTip from './components/LessonToolTip';
// import LessonAvatar from './components/LessonAvatar';
// import LessonList from './components/LessonList';
// import LessonBottomNavigation from './components/LessonBottomNavigation';
// import LessonSpeedDial from './components/LessonSpeedDial';
// import LessonBadge from './components/LessonBadge';
// import LessonBreadCrumb from './components/LessonBreadCrumb';
// import LessonDrawer from './components/LessonDrawer';
// import LessonLink from './components/LessonLink';
// import LessonPaper from './components/LessonPaper';
// import { LessonImageList } from './components/LessonImageList';
// import LessonAppbar from './components/LessonAppbar';
// import LessonAccordion from './components/LessonAccordion';
// import LessonCard from './components/LessonCard';
// import { LessonGrid } from './components/LessonGrid';
// import { LessonStack } from './components/LessonStack';
// import { LessonBox } from './components/LessonBox';
// import { LessonAutoComplete } from './components/LessonAutoComplete';
// import LessonCheckbox from './LessonCheckbox';
// import LessonSelect from './components/LessonSelect';
// import LessonRadioExample from './components/LessonRadioExample';
// import LessonRadioGroup from './components/LessonRadioGroup';
// import LessonButton from './components/LessonButton';
// import LessonButtonGroup from './components/LessonButtonGroup';
// import LessonTextField from './components/LessonTextField';
// import LessonTypography from './components/LessonTypography';
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <LessonTypography /> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup /> */}
        {/* <LessonTextField /> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonRadioExample /> */}
        {/* <LessonSelect /> */}
        {/* <LessonCheckbox /> */}
        {/* <LessonAutoComplete /> */}
        {/* <LessonBox /> */}
        {/* <LessonStack /> */}
        {/* <LessonGrid /> */}
        {/* <LessonCard /> */}
        {/* <LessonAccordion /> */}
        {/* <LessonAppbar /> */}
        {/* <LessonImageList /> */}
        {/* <LessonPaper /> */}
        {/* <LessonLink /> */}
        {/* <LessonBreadCrumb /> */}
        {/* <LessonDrawer /> */}
        {/* <LessonBadge /> */}
        {/* <LessonSpeedDial /> */}
        {/* <LessonBottomNavigation /> */}
        {/* <LessonAvatar /> */}
        {/* <LessonList /> */}
        {/* <LessonToolTip /> */}
        {/* <LessonAlert /> */}
        {/* <LessonDialog /> */}
        {/* <LessonSnackBars /> */}
        {/* <LessonProgress /> */}
        {/* <LessonSkeleton /> */}
        {/* <LessonLoadingButton /> */}
        {/* <LessonTable /> */}
        {/* <LessonDateTime /> */}
        {/* <LessonTabs /> */}
        {/* <LessonMasonry /> */}
        {/* <LessonTimeLine /> */}
        <LessonCustomization />
      </div>
    </ThemeProvider>
  );
}

export default App;
