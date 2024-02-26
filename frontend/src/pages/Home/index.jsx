import React from 'react'

const Index = () => {
  const dummyData = [
    { latitude: 51.505, longitude: -0.09, regionName: "Region 1" },
    { latitude: 51.51, longitude: -0.1, regionName: "Region 2" },
    { latitude: 51.515, longitude: -0.095, regionName: "Region 3" }
    // Add more dummy data as needed
  ];
  
  return (
    <div style={{
        // background: "linear-gradient(115deg, #4CAF50, black)",
    width: "100%",
    // height: "40vh"
    }}>
         <h1>Leaflet Map with Dummy Data</h1>
      {/* <LeafletMap data={dummyData} />
      <Memory/>
      <OS/> */}
      {/* <ServerSidePagination/> */}
    </div>
  )
}

export default Index