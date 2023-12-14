import SwiftUI

struct MapView: View {
    @State private var scale: CGFloat = 1.0

    var body: some View {
        ScrollView([.horizontal, .vertical], showsIndicators: false) {
            Image("ucr_map") 
                .resizable()
                .scaledToFit()
                .scaleEffect(scale)
                .gesture(
                    MagnificationGesture()
                        .onChanged { value in
                            self.scale = value.magnitude
                        }
                )
        }
    }
}

