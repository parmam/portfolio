import { FunctionComponent, useEffect } from "react";

import MainLayout from "@components/ui/layouts/MainLayout";
import { ErrorBoundary } from "@libs/utils";

const HomePage: FunctionComponent = () => {

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api'); 
        const data = await response.json(); 
        console.log(data); 
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    }
    fetchInitialData();
  },[])
  return <MainLayout >
    <ErrorBoundary error={false} fallBackComponent={<p>se rompio</p>}>
      hola
    </ErrorBoundary>
  </MainLayout>
}


export default HomePage