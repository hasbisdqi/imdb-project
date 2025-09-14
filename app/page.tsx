import React from "react";
import Button from "./components/button";
import PlayButton from "./components/playButton";
import MovieCard from "./components/movieCard";
import ProfilePicture from "./components/profilePic";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "The Fantastic Four",
      rating: 7.2,
      posterUrl:
        "https://i.pinimg.com/736x/87/6e/c4/876ec46d8e95efc1e591c75b451e2ef5.jpg",
    },
  ];

  const actors = [
    {
      id: 13,
      name: "Jo Mama",
      age: 49,
      profileUrl:
        "https://i.pinimg.com/736x/87/6e/c4/876ec46d8e95efc1e591c75b451e2ef5.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Button variant="">
          <span>
            <p>Count</p>
          </span>
        </Button>
        <PlayButton />
      </div>

      <div className="flex gap-4 p-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            posterUrl={movie.posterUrl}
          />
        ))}
      </div>
      <div>
        {actors.map((actor) => (
          <ProfilePicture
            key={actor.id}
            name={actor.name}
            age={actor.age}
            profileUrl={actor.profileUrl}
          />
        ))}
      </div>
    </>
  );
}
