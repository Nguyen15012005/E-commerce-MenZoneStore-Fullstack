package iuh.fit.backend.repository;

import iuh.fit.backend.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author TrungNguyen
 * @created 4/15/2026
 * @description
 */
public interface SellerRepository extends JpaRepository<Seller, Long> {

    Seller findByEmail(String email);
}
