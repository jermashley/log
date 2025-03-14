<?php

use App\Http\Controllers\SpotifyController;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::as('api.')
    ->group(function () {
        Route::get('/spotify/now-playing', [SpotifyController::class, 'nowPlaying'])->name('spotify.now-playing');
        Route::get('/spotify/recent-tracks', [SpotifyController::class, 'recentTracks'])->name('spotify.recent-tracks');
        Route::get('/spotify/top-artists', [SpotifyController::class, 'topArtists'])->name('spotify.top-artists');
        Route::get('/spotify/top-tracks', [SpotifyController::class, 'topTracks'])->name('spotify.top-tracks');
        Route::get('/spotify/playlists', [SpotifyController::class, 'playlists'])->name('spotify.playlists');
    })->middleware(Authenticate::using('sanctum'));
