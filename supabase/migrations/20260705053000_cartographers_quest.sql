-- The Cartographer's Quest: custom map requests + future map idea voting board

-- Custom map requests submitted from the website form.
-- No public policies: only the send-map-request edge function (service role) writes here.
CREATE TABLE public.map_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  requester_name text NOT NULL,
  email text NOT NULL,
  realm text NOT NULL,
  map_title text NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.map_requests ENABLE ROW LEVEL SECURITY;

-- Future map ideas shown on the Drafting Table board.
CREATE TABLE public.map_ideas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  title text NOT NULL,
  description text NOT NULL,
  realm text NOT NULL,
  status text NOT NULL DEFAULT 'concept',
  votes integer NOT NULL DEFAULT 0
);

ALTER TABLE public.map_ideas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view map ideas"
  ON public.map_ideas
  FOR SELECT
  USING (true);

-- Votes are only incremented through this function; no direct UPDATE access.
CREATE OR REPLACE FUNCTION public.vote_for_map_idea(idea_id uuid)
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.map_ideas
  SET votes = votes + 1
  WHERE id = idea_id
  RETURNING votes;
$$;

GRANT EXECUTE ON FUNCTION public.vote_for_map_idea(uuid) TO anon, authenticated;

-- Seed the Drafting Table
INSERT INTO public.map_ideas (title, description, realm, status) VALUES
  ('The Psalms Songline Atlas', 'A worship-lands world map tracing the Psalms as rivers, highlands, and valleys of praise and lament — with a Soul Explorer guide of daily readings.', 'faith', 'inking'),
  ('The Parables Wayfarer''s Map', 'Every parable of Jesus charted as a village, road, or field along one winding pilgrim trail from the Sower''s Farmland to the Father''s House.', 'faith', 'sketching'),
  ('Route 66 Freedom Trail World', 'The Mother Road reimagined as a fantasy kingdom — eight states of neon oases, dust-bowl badlands, and roadside legends from Chicago to Santa Monica.', 'freedom', 'sketching'),
  ('Space Race: Cape to Cosmos', 'From Kitty Hawk foothills to Tranquility Sea — America''s flight and space milestones drawn as an ascending archipelago of discovery.', 'freedom', 'concept'),
  ('Hockey Legend Land: Original Six', 'Frozen realms for the six founding franchises — castle arenas, rivalry borderlands, and a Stanley Cup summit at the center of the ice.', 'fans', 'concept'),
  ('Golf Legend Land: The Major Isles', 'Four storied islands — Augusta Blooms, Links of the Open, U.S. Open Highlands, and the PGA Shores — for the fans of the fairway.', 'fans', 'concept'),
  ('Robotics Realm: The Clockwork Coast', 'A Tomorrow Explorer map of robotics and automation — gear-forged harbors, sensor lighthouses, and an Adventure Pack of hands-on AI missions.', 'future', 'inking'),
  ('The Prompt Engineer''s Archipelago', 'Island chains for the craft of prompting — Context Cove, Chain-of-Thought Straits, and the Fine-Tuning Frontier — with tutorials for every isle.', 'future', 'concept');
