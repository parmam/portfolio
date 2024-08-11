import { FunctionComponent, useEffect } from "react";

import MainLayout from "@components/ui/layouts/MainLayout";
import { ErrorBoundary } from "@libs/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { getCharactersThunk, ThunkStatus } from "@store/slices/rickAndMortySlice";
import { Heading, TextField } from "@components/ui/elements";
import EmailField from "@components/ui/elements/EmailField";

const RickAndMortyPage: FunctionComponent = () => {

  const dispatch = useDispatch<AppDispatch>();
  const charactersStatus = useSelector((state: RootState) => state.rickAndMorty.characters.status);

  useEffect(() => {
    dispatch(getCharactersThunk(1))
  }, []);

  return <ErrorBoundary error={charactersStatus === ThunkStatus.FETCH_ERROR} fallBackComponent={<p>se rompio</p>}>
    <MainLayout >

      <Heading title="asdasdsadsa" />
      <TextField variant="rounded" size="xl" onChange={(event) => console.log(event.target.value)} />
      <EmailField variant="rounded" size="sm" onChange={(event) => console.log(event.target.value)} />
    </MainLayout >

  </ErrorBoundary>

}


export default RickAndMortyPage


