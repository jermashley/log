<?php

namespace App\Http\Controllers;

use App\Services\SpotifyService;
use Symfony\Component\HttpFoundation\JsonResponse;

class SpotifyController extends Controller
{
    protected $spotifyService;

    public function __construct(SpotifyService $spotifyService)
    {
        $this->spotifyService = $spotifyService;
    }

    public function nowPlaying(): JsonResponse
    {
        dump('hello');

        return response()->json($this->spotifyService->getNowPlaying());
    }

    public function recentTracks(): JsonResponse
    {
        return response()->json($this->spotifyService->getRecentTracks());
    }

    public function topArtists(): JsonResponse
    {
        return response()->json($this->spotifyService->getTopArtists());
    }

    public function topTracks(): JsonResponse
    {
        return response()->json($this->spotifyService->getTopTracks());
    }

    public function playlists(): JsonResponse
    {
        return response()->json($this->spotifyService->getPlaylists());
    }
}
