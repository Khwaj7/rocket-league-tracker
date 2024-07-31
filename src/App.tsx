import './App.css';
import { pieData } from './charts/mocks/piedata';
import { MyResponsivePie } from './charts/pie/pie';
import { dataRadar } from './charts/mocks/radardata';
import { MyResponsiveRadar } from './charts/radar/radar';
import { MyResponsiveChord } from './charts/chord/chord';
import { chordData } from './charts/mocks/chorddata';

function App() {
  return (
    <div className="App">
      <body style={{ height: "300px", width: "450px" }}>
        <MyResponsiveRadar data={dataRadar}></MyResponsiveRadar>
        <MyResponsivePie data={pieData}></MyResponsivePie>
        <MyResponsiveChord data={chordData}></MyResponsiveChord>
      </body>
    </div>
  );
}

export default App;
