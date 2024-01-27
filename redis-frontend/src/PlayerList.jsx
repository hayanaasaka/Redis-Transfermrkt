import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPlayers = players.filter((player) =>
    player.data.player_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [newPlayer, setNewPlayer] = useState({
    id: "",
    kit_number: "",
    player_name: "",
    position: "",
    age: "",
    nationality: "",
    height: "",
    foot: "",
    joined: "",
    contract: "",
    market_value: "",
    club_name: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4040/players");
      setPlayers(response.data.players);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewPlayer({
      ...newPlayer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPlayer = async () => {
    const randomId = uuidv4();

    try {
      const response = await axios.post("http://localhost:4040/player/add", {
        ...newPlayer,
        id: randomId,
      });
      console.log("API Response:", response.data);
      fetchData();
      setNewPlayer({
        id: "",
        kit_number: "",
        player_name: "",
        position: "",
        age: "",
        nationality: "",
        height: "",
        foot: "",
        joined: "",
        contract: "",
        market_value: "",
        club_name: "",
      });
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  const handleEditPlayer = (player) => {
    setNewPlayer({
      id: player.id,
      kit_number: player.data.kit_number,
      player_name: player.data.player_name,
      position: player.data.position,
      age: player.data.age,
      nationality: player.data.nationality,
      height: player.data.height,
      foot: player.data.foot,
      joined: player.data.joined,
      contract: player.data.contract,
      market_value: player.data.market_value,
      club_name: player.data.club_name,
    });
  };

  const handleUpdatePlayer = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4040/player/update/${newPlayer.id}`,
        newPlayer
      );
      console.log("API Response:", response.data);
      fetchData();
      setNewPlayer({
        id: "",
        kit_number: "",
        player_name: "",
        position: "",
        age: "",
        nationality: "",
        height: "",
        foot: "",
        joined: "",
        contract: "",
        market_value: "",
        club_name: "",
      });
    } catch (error) {
      console.error("Error updating player:", error);
    }
  };

  const handleDeletePlayer = async (playerId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4040/player/delete/${playerId}`
      );
      console.log("API Response:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md">
      <div className="text-4xl font-bold text-center mb-8">Manage Players</div>

      <form className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2">Kit Number:</label>
            <select
              name="kit_number"
              value={newPlayer.kit_number}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            >
              {/* Contoh pilihan kit number, tambahkan atau kurangi sesuai kebutuhan */}
              <option>Pilih Inputan</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
              <option value="60">60</option>
              <option value="61">61</option>
              <option value="62">62</option>
              <option value="63">63</option>
              <option value="64">64</option>
              <option value="65">65</option>
              <option value="66">66</option>
              <option value="67">67</option>
              <option value="68">68</option>
              <option value="69">69</option>
              <option value="70">70</option>
              <option value="71">71</option>
              <option value="72">72</option>
              <option value="73">73</option>
              <option value="74">74</option>
              <option value="75">75</option>
              <option value="76">76</option>
              <option value="77">77</option>
              <option value="78">78</option>
              <option value="79">79</option>
              <option value="80">80</option>
              <option value="81">81</option>
              <option value="82">82</option>
              <option value="83">83</option>
              <option value="84">84</option>
              <option value="85">85</option>
              <option value="86">86</option>
              <option value="87">87</option>
              <option value="88">88</option>
              <option value="89">89</option>
              <option value="90">90</option>
              <option value="91">91</option>
              <option value="92">92</option>
              <option value="93">93</option>
              <option value="94">94</option>
              <option value="95">95</option>
              <option value="96">96</option>
              <option value="97">97</option>
              <option value="98">98</option>
              <option value="99">99</option>
              {/* ... tambahkan kit number lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Player Name:</label>
            <input
              type="text"
              name="player_name"
              value={newPlayer.player_name}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Position:</label>
            <select
              name="position"
              value={newPlayer.position}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            >
              {/* Contoh pilihan posisi, tambahkan atau kurangi sesuai kebutuhan */}
              <option>Pilih Inputan</option>
              <option value="Central Forward (CF)">Central Forward (CF) </option>
              <option value="Right Winger (RW)">Right Winger (RW) </option>
              <option value="Left Winger (LW)">Left Winger (LW) </option>
              <option value="Attack Midfielder (AM)">Attack Midfielder (AM) </option>
              <option value="Central Midfielder (CM)">Central Midfielder (CM) </option>
              <option value="Defensive Midfielder (DM)">Defennsive Midfielder (DM) </option>
              <option value="Left Back (LB)">Left Back (LB) </option>
              <option value="Central Back (CB) ">Central Back (CB) </option>
              <option value="Right Back (RB)">Right Back (RB) </option>
              <option value="Goal Keeper (GK) ">Goal Keeper (GK) </option>
              {/* ... tambahkan posisi lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Age:</label>
            <select
              name="age"
              value={newPlayer.age}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            >
              {/* Contoh pilihan umur, tambahkan atau kurangi sesuai kebutuhan */}
              <option>Pilih Inputan</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              {/* ... tambahkan umur lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Nationality:</label>
            <select
              name="nationality"
              value={newPlayer.nationality}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            >
              {/* Contoh pilihan negara, tambahkan atau kurangi sesuai kebutuhan */}
              <option>Pilih Inputan</option>
              <option value="Algeria">Algeria</option>
              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Brazil</option>
              <option value="Belgium">Belgium</option>
              <option value="Brazil">Brazil</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Chile">Chile</option>
              <option value="Croatia">Croatia</option>
              <option value="Czechia">Czechia</option>
              <option value="Denmark">Denmark</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="England">England</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Greece">Greece</option>
              <option value="Hungary">Hungary</option>
              <option value="Iran">Iran</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Korea Republic">Korea Republic</option>
              <option value="Mali">Mali</option>
              <option value="Mexico">Mexico</option>
              <option value="Morocco">Morocco</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Norway">Norway</option>
              <option value="Panama">Panama</option>
              <option value="Peru">Peru</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Scotland">Scotland</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Spain">Spain</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkiye">Turkiye</option>
              <option value="USA">USA</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Wales">Wales</option>
              {/* ... tambahkan negara lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Height:</label>
            <input
              type="text"
              name="height"
              value={newPlayer.height}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Foot:</label>
            <select
              name="foot"
              value={newPlayer.foot}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            >
              {/* Contoh pilihan posisi, tambahkan atau kurangi sesuai kebutuhan */}
              <option>Pilih Inputan</option>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
              {/* ... tambahkan posisi lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Joined:</label>
            <input
              type="date"
              name="joined"
              value={newPlayer.joined}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Contract:</label>
              <select
              name="contract"
              value={newPlayer.contract}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            >
              {/* Contoh pilihan posisi, tambahkan atau kurangi sesuai kebutuhan */}
              <option value="">Pilih Inputan</option>
              <option value="1 years">1 years</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="5 years">5 years</option>
              {/* ... tambahkan posisi lain sesuai kebutuhan */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Market Value:</label>
            <input
              type="text"
              name="market_value"
              value={newPlayer.market_value}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Club Name:</label>
            <input
              type="text"
              name="club_name"
              value={newPlayer.club_name}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={newPlayer.id ? handleUpdatePlayer : handleAddPlayer}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {newPlayer.id ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div className="mt-8">
        <input
          type="text"
          placeholder="Search by player name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
      </div>

      <div className="mt-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Kit Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Player Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Nationality
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Height
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Foot
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Contract
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Market Value
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Club Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPlayers.map((player) => (
              <tr key={player.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.kit_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.player_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.nationality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.height}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.foot}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.joined}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.contract}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.market_value}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {player.data.club_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => handleEditPlayer(player)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-2"
                    onClick={() => handleDeletePlayer(player.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerList;