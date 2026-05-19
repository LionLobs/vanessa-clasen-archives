
INSERT INTO storage.buckets (id, name, public)
VALUES ('book-audio', 'book-audio', true)
ON CONFLICT (id) DO NOTHING;

-- Public read
CREATE POLICY "Book audio is publicly readable"
ON storage.objects FOR SELECT
USING (bucket_id = 'book-audio');
