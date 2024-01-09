package nassar.goldagram.backend.repositories;

import nassar.goldagram.backend.entities.Gold;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoldRepository extends JpaRepository<Gold, Long> { }